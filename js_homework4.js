/**
 ДОМАШНЄ ЗАВДАННЯ
 Тема: Імпорти / Експорти та Асинхронність

 Інструкція:
 - Кожне завдання потрібно виконати у відведеному місці (після коментаря "Ваш код тут:")
 - Використовуй console.log() для перевірки результатів
 - Завдання 1-3 потребують створення окремих файлів (структура описана в умові)
 - Не видаляй умову завдання
 */


// ============================================================
// ЧАСТИНА 1: ІМПОРТИ ТА ЕКСПОРТИ (Завдання 1–3)
// ============================================================


// ============================================================
// Завдання 1
// ============================================================
/**
 Створи два файли:

 Файл 1: mathUtils.js
   - Функції add(a, b), subtract(a, b), multiply(a, b) — named exports
   - Константа PI = 3.14159 — named export

 Файл 2: task1.js
   - Імпортуй add та multiply під іменами sum і mult (через "as")
   - Імпортуй PI як namespace через import * as Math
   - Виведи результати

 Очікуваний результат (task1.js):
 sum(5, 3)       => 8
 mult(5, 3)      => 15
 Math.PI         => 3.14159
 Math.subtract(10, 4) => 6
 */

// mathUtils.js:
/*export const PI = 3.14159;

export function add(a, b) {
    // Ваш код тут:
}
export function subtract(a, b) {
    // Ваш код тут:
}
export function multiply(a, b) {
    // Ваш код тут:
}*/

// task1.js:
/*import { add as sum, multiply as mult } from './mathUtils.js';
import * as Math from './mathUtils.js';

// Ваш код тут:*/


// ============================================================
// Завдання 2
// ============================================================
/**
 Створи три файли та зроби індексний (barrel) файл:

 Файл 1: utils/strings.js
   - Функція capitalize(str) — перша літера велика, решта маленькі
   - Функція truncate(str, n) — обрізає до n символів і додає "..." якщо довший

 Файл 2: utils/numbers.js
   - Функція clamp(val, min, max) — обмежує значення між min і max
   - Функція randomInt(min, max) — випадкове ціле число в діапазоні

 Файл 3: utils/index.js  ← ТІЛЬКИ re-exports, жодної логіки
   - Re-export усього з strings.js та numbers.js

 Файл 4: task2.js
   - Імпортуй все ТІЛЬКИ з utils/index.js

 Очікуваний результат (task2.js):
 capitalize("hello world")   => "Hello world"
 truncate("Довгий текст", 6) => "Довгий..."
 clamp(150, 0, 100)          => 100
 randomInt(1, 10)            => (число від 1 до 10)
 */

// utils/strings.js:
/*export function capitalize(str) {
    // Ваш код тут:
}
export function truncate(str, n) {
    // Ваш код тут:
}*/

// utils/numbers.js:
/*export function clamp(val, min, max) {
    // Ваш код тут:
}
export function randomInt(min, max) {
    // Ваш код тут:
}*/

// utils/index.js:
/*export { capitalize, truncate } from './strings.js';
// Ваш код тут (numbers):*/

// task2.js:
/*import { capitalize, truncate, clamp, randomInt } from './utils/index.js';
// Ваш код тут:*/


// ============================================================
// Завдання 3
// ============================================================
/**
 Створи два файли та реалізуй динамічний імпорт:

 Файл 1: calculator.js
   - Default export — об'єкт із методами: add, subtract, multiply, divide
   - divide має кидати Error("Ділення на нуль") якщо b === 0

 Файл 2: task3.js
   - НЕ використовуй статичний import на початку файлу
   - Напиши async функцію calculate(a, b), яка:
       1. Динамічно завантажує calculator.js через import()
       2. Виводить результати всіх 4 операцій
       3. Обробляє помилку ділення на нуль через try/catch

 Очікуваний результат (task3.js):
 Завантаження калькулятора...
 10 + 3 = 13
 10 - 3 = 7
 10 * 3 = 30
 10 / 3 = 3.33
 ---
 Завантаження калькулятора...
 Помилка: Ділення на нуль
 */

// calculator.js:
/*const calculator = {
    add:      (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide:   (a, b) => {
        // Ваш код тут:
    }
};

export default calculator;*/

// task3.js:
/*async function calculate(a, b) {
    console.log("Завантаження калькулятора...");
    // Ваш код тут (динамічний import):
}

calculate(10, 3);
calculate(10, 0);*/


// ============================================================
// ЧАСТИНА 2: АСИНХРОННІСТЬ (Завдання 4–10)
// ============================================================


// ============================================================
// Завдання 4
// ============================================================
/**
 Поясни у вигляді коментаря — в якому порядку виведуться рядки і чому.
 Потім запусти і перевір.

 Порядок: ?
 */

/*console.log("1");
setTimeout(function() { console.log("2"); }, 0);
Promise.resolve().then(function() { console.log("3"); });
console.log("4");*/

// Ваш коментар (порядок та причина):
//
// Підказка: окрім Callback Queue є ще Microtask Queue (для Promise),
// яка має вищий пріоритет!


// ============================================================
// Завдання 5
// ============================================================
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

/*function delay(ms) {
    // Ваш код тут:
}

async function run() {
    // Ваш код тут:
}

run();*/


// ============================================================
// Завдання 6
// ============================================================
/**
 Є функція fetchUser. Перепиши виклик з .then/.catch на async/await + try/catch.
 НЕ змінюй саму функцію fetchUser.

 Очікуваний результат:
 getUser(1)  => "Користувач: Іван"
 getUser(99) => "Помилка: Користувача не знайдено"
 */

/*function fetchUser(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (id === 1) resolve({ id: 1, name: "Іван" });
            else          reject(new Error("Користувача не знайдено"));
        }, 500);
    });
}

// Оригінал (через .then/.catch) — НЕ видаляй:
// fetchUser(1).then(u => console.log(u.name)).catch(e => console.log(e.message));

async function getUser(id) {
    // Ваш код тут:
}

getUser(1);
getUser(99);*/


// ============================================================
// Завдання 7
// ============================================================
/**
 Є три незалежних "запити". Виконай їх ПАРАЛЕЛЬНО і виведи
 всі результати після завершення останнього.

 Очікуваний результат:
 ["Користувачі", "Товари", "Замовлення"]
 Час: ~1000мс (не 2400мс!)
 */

/*function getUsers()    { return new Promise(r => setTimeout(() => r("Користувачі"), 1000)); }
function getProducts() { return new Promise(r => setTimeout(() => r("Товари"),       800));  }
function getOrders()   { return new Promise(r => setTimeout(() => r("Замовлення"),   600));  }

async function loadAll() {
    var start = Date.now();
    // Ваш код тут:

    console.log("Час:", Date.now() - start, "мс");
}

loadAll();*/


// ============================================================
// Завдання 8
// ============================================================
/**
 Напиши функцію withTimeout(promise, ms), яка відхиляє Promise
 якщо він не завершився за вказаний час.

 Підказка: Promise.race

 Очікуваний результат:
 withTimeout(повільний, 500)  => "Timeout!"
 withTimeout(швидкий,  2000)  => "Швидкі дані"
 */

/*var slowRequest = new Promise(r => setTimeout(() => r("Повільні дані"), 1500));
var fastRequest  = new Promise(r => setTimeout(() => r("Швидкі дані"),   300));

function withTimeout(promise, ms) {
    // Ваш код тут:
}

withTimeout(slowRequest, 500)
    .then(r  => console.log(r))
    .catch(e => console.log(e.message));

withTimeout(fastRequest, 2000)
    .then(r  => console.log(r))
    .catch(e => console.log(e.message));*/


// ============================================================
// Завдання 9
// ============================================================
/**
 Напиши async функцію retryRequest(fn, retries), яка повторює
 виклик fn() у разі помилки (максимум retries разів).
 Якщо всі спроби вичерпано — кидає помилку "Всі спроби вичерпано".

 Очікуваний результат:
 Спроба 1... невдача
 Спроба 2... невдача
 Спроба 3... успіх!
 Результат: "Дані отримано"
 */

/*var attempt = 0;
function unstable() {
    attempt++;
    console.log(`Спроба ${attempt}...`);
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (attempt < 3) reject(new Error("невдача"));
            else             resolve("Дані отримано");
        }, 300);
    });
}

async function retryRequest(fn, retries) {
    // Ваш код тут:
}

retryRequest(unstable, 5)
    .then(r  => console.log("Результат:", r))
    .catch(e => console.log("Помилка:", e.message));*/


// ============================================================
// Завдання 10 (підвищена складність ⭐)
// ============================================================
/**
 Напиши async функцію batchRequests(ids, batchSize), яка:
   - Виконує запити пакетами по batchSize штук ПАРАЛЕЛЬНО
   - Пакети виконуються ПОСЛІДОВНО (наступний — після попереднього)
   - Повертає єдиний масив усіх результатів у правильному порядку

 Приклад: ids = [1,2,3,4,5], batchSize = 2
   Пакет 1: [1, 2] паралельно → чекаємо
   Пакет 2: [3, 4] паралельно → чекаємо
   Пакет 3: [5]               → чекаємо
   Результат: [item1, item2, item3, item4, item5]

 Очікуваний результат:
 Пакет: [1, 2]
 Пакет: [3, 4]
 Пакет: [5]
 Всі дані: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
 */

/*function fetchItem(id) {
    return new Promise(r => setTimeout(() => r({ id, data: `item_${id}` }), 400));
}

async function batchRequests(ids, batchSize) {
    // Ваш код тут:
}

batchRequests([1, 2, 3, 4, 5], 2)
    .then(results => console.log("Всі дані:", results));*/