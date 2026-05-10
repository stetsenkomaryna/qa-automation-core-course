/**
 * Файл 2: utils/numbers.js
   - Функція clamp(val, min, max) — обмежує значення між min і max
   - Функція randomInt(min, max) — випадкове ціле число в діапазоні
 */

export function clamp(val, min, max) {
    // Ваш код тут:
    if (val < min) {
        return min;
    } else if (val > max) {
        return max;
    } else {
        return val;
    }
}

export function randomInt(min, max) {
    // Ваш код тут:
    return Math.floor(Math.random() * (max - min + 1)) + min;
}  