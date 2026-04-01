const express = require('express');
const fs = require('fs'); // Модуль для работы с файлами
const app = express();
app.use(express.json());

const FILE_PATH = './database.json';

// Функция 1: Читаем баланс из файла
function getBalanceFromFile() {
    if (!fs.existsSync(FILE_PATH)) {
        // Если файла нет, создаем его с начальным балансом 1000
        fs.writeFileSync(FILE_PATH, JSON.stringify({ balance: 1000 }));
        return 1000;
    }
    const data = fs.readFileSync(FILE_PATH);
    return JSON.parse(data).balance;
}
///
// Функция 2: Сохраняем новый баланс в файл
function saveBalanceToFile(newBalance) {
    fs.writeFileSync(FILE_PATH, JSON.stringify({ balance: newBalance }));
}

// Инициализируем баланс при старте сервера
let balance = getBalanceFromFile();

app.get('/balance', (req, res) => {
    res.json({ amount: Number(balance.toFixed(2)), currency: "MDL" });
});

app.post('/pay', (req, res) => {
    const { amount } = req.body;

    if (typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({ ok: false, error: "Invalid amount" });
    }

    const totalToDebit = amount * 1.02; // Сумма + 2% комиссия

    if (totalToDebit > balance) {
        return res.status(400).json({ ok: false, 
            error: "Недостаточно средств для перевода с комиссией",
            required : amount,
            available : balance
        });
    }

    // Списываем в памяти
    balance -= totalToDebit;
    
    // СОХРАНЯЕМ В ФАЙЛ (теперь баланс не пропадет!)
    saveBalanceToFile(balance);

    res.json({ 
        ok: true, 
        newBalance: Number(balance.toFixed(2)),
        fee: Number((amount * 0.02).toFixed(2))
    });
});
app.post('/deposit', (req, res) => {
    const { amount } = req.body;

    if (typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({ ok: false, error: "Invalid amount" });
    }

    balance += amount;
    saveBalanceToFile(balance);

    res.json({ 
        ok: true, 
        newBalance: Number(balance.toFixed(2))
    });
});

app.listen(3000, () => {
    console.log('🚀 Банк с базой данных запущен на http://localhost:3000');
});