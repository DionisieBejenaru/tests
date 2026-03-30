const { test, expect } = require('@playwright/test');
const path = require('path');

test('Проверка списания баланса в Maib Daily', async ({ page }) => {
  // 1. Открываем твой файл index.html (путь к нему на твоем Маке)
  const filePath = `file://${path.resolve('index.html')}`;
  await page.goto(filePath);

  // 2. Проверяем начальный баланс
  const balance = page.locator('#balance');
  await expect(balance).toHaveText('1000.00');

  // 3. Находим кнопку и кликаем по ней
  const button = page.locator('#payBtn');
  await button.click();

  // 4. Проверяем, что баланс уменьшился
  await expect(balance).toHaveText('989.50');
});