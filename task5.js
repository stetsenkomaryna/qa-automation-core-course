/**
 Напиши функцію delay(ms), яка повертає Promise що виконується через ms мілісекунд.
 Потім через async/await реалізуй такий сценарій:
   1. Вивести "Початок"
   2. Почекати 1 секунду → вивести "Крок 1"
   3. Почекати 500мс    → вивести "Крок 2"
   4. Вивести "Кінець"

 Очікуваний результат:
 Початок
 (1с)
 Крок 1
 (0.5с)
 Крок 2
 Кінець
 */

function delay(ms) {
    // Ваш код тут:
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    // Ваш код тут:
    console.log("Початок");
    await delay(1000);
    console.log("Крок 1");
    await delay(500);
    console.log("Крок 2");
    console.log("Кінець");
}

run();
