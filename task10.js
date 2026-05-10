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

function fetchItem(id) {
    return new Promise(r => setTimeout(() => r({ id, data: `item_${id}` }), 400));
}

async function batchRequests(ids, batchSize) {
    // Ваш код тут:
    const results = [];
    for (let i = 0; i < ids.length; i += batchSize) {
        const batch = ids.slice(i, i + batchSize);
        console.log("Пакет:", batch);
        const batchResults = await Promise.all(batch.map(fetchItem));
        results.push(...batchResults);
    }
    return results;
}

batchRequests([1, 2, 3, 4, 5], 2)
    .then(results => console.log("Всі дані:", results));