
/**
 * Файл 2: task3.js
   - НЕ використовуй статичний import на початку файлу
   - Напиши async функцію calculate(a, b), яка:
       1. Динамічно завантажує calculator.js через import()
       2. Виводить результати всіх 4 операцій
       3. Обробляє помилку ділення на нуль через try/catch
 */

async function calculate(a, b) {
    console.log("Завантаження калькулятора...");
       // Ваш код тут (динамічний import):
    try {
        const calculator = await import('./calculator.js');
        console.log(`${a} + ${b} = ${calculator.default.add(a, b)}`);
        console.log(`${a} - ${b} = ${calculator.default.subtract(a, b)}`);
        console.log(`${a} * ${b} = ${calculator.default.multiply(a, b)}`);
        console.log(`${a} / ${b} = ${calculator.default.divide(a, b).toFixed(2)}`);
    } catch (error) {
        console.error(`Помилка: ${error.message}`);
    }
}

async function runTasks() {
    await calculate(10, 3);
    console.log("---"); 
    await calculate(10, 0);
}

runTasks();