//Файл 2: task1.js
//  - Імпортуй add та multiply під іменами sum і mult (через "as")
//  - Імпортуй PI як namespace через import * as Math
//  - Виведи результати~

// task1.js:
 import { add as sum, multiply as mult } from './mathUtils.js';
 import * as Math from './mathUtils.js';
// Ваш код тут:
console.log(sum(5, 3)); // 8
console.log(mult(5, 3)); // 15
console.log(Math.PI); // 3.14159
console.log(Math.subtract(10, 4)); // 6