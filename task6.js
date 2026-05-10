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

function fetchUser(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (id === 1) resolve({ id: 1, name: "Іван" });
            else          reject(new Error("Користувача не знайдено"));
        }, 500);
    });
}

// Оригінал (через .then/.catch) — НЕ видаляй:
 fetchUser(1).then(u => console.log(u.name)).catch(e => console.log(e.message));

async function getUser(id) {
    // Ваш код тут:
    try {
        const user = await fetchUser(id);
        console.log(`Користувач: ${user.name}`);
    } catch (error) {
        console.log(`Помилка: ${error.message}`);
    }

}

getUser(1);
getUser(99);

