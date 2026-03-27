// console.log("Hello World!")

// const userName = "Ivan"
// const paymentLimit = 10000
// let currentAmount = 5000

// console.log(userName)
// console.log(paymentLimit)
// console.log(currentAmount)

// currentAmount = 8000
// console.log(currentAmount)
// paymentLimit = 12000

// const templateName = ``
// const templateName2 = null

// console.log(templateName === "")
// console.log(templateName2 === null)
// console.log(templateName === templateName2)

// const a = ``
// const b = null
// const c = undefined

// console.log(a === b)
// console.log(b === c)
// console.log(a === c)

// Сервер должен возвращать 400 на все три, если на один возвращает 200 - это баг

// const paymentAmount = 5000
// const paymentLimit = 10000
// if (paymentAmount>paymentLimit) {
//     console.log(`Вы превысили допустимый лимит`)
// } else {
//     console.log(`Операция прошла успешно`)
// }

// if else конструкции для проверки условий. Если одно не выполняется, тогда выполняется другое.\

function checkPayment (amount, balance) {
    if (amount <= balance) {
        return 'Оплата прошла'
    } else {
        return 'Недостаточно средств'
    }
}

console.log(checkPayment (50, 100) )
console.log(checkPayment (100, 50) )
console.log(checkPayment (100, 100) )
let a = "null"
let somebool = a 
a = null
if (somebool)
    console.log("popa")
