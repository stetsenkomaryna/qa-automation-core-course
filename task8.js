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

var slowRequest = new Promise(r => setTimeout(() => r("Повільні дані"), 1500));
var fastRequest  = new Promise(r => setTimeout(() => r("Швидкі дані"),   300));

function withTimeout(promise, ms) {
    // Ваш код тут:
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout!")), ms));
    return Promise.race([promise, timeout]);

}

withTimeout(slowRequest, 500)
    .then(r  => console.log(r))
    .catch(e => console.log(e.message));

withTimeout(fastRequest, 2000)
    .then(r  => console.log(r))
    .catch(e => console.log(e.message));
