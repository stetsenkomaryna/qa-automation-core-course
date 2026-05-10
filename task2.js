/**
 Файл 4: task2.js
   - Імпортуй все ТІЛЬКИ з utils/index.js
 */
import { capitalize, truncate, clamp, randomInt } from './utils/index.js';
// Ваш код тут:


console.log(capitalize('hello world')); // Hello World
console.log(truncate('Довгий текст', 6)); // Довгий...
console.log(clamp(150, 0, 100)); // 100
console.log(randomInt(1, 10)); // число від 1 до 10