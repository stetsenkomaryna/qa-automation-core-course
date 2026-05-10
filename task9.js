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

var attempt = 0;
function unstable() {
    attempt++;
    console.log(`Спроба ${attempt}...`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (attempt < 3) reject(new Error("невдача"));
            else resolve("Дані отримано");
        }, 300);
    });
}

async function retryRequest(fn, retries) {
    // Ваш код тут:
    for (let i = 0; i < retries; i++) {
        try {
            const result = await fn();
            console.log("успіх!");
            return result;
        } catch (error) {
            console.log(error.message);
        }
    }
    throw new Error("Всі спроби вичерпано");

}

retryRequest(unstable, 5)
    .then(r => console.log("Результат:", r))
    .catch(e => console.log("Помилка:", e.message));

