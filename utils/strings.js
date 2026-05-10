/**
 * Файл 1: utils/strings.js
   - Функція capitalize(str) — перша літера велика, решта маленькі
   - Функція truncate(str, n) — обрізає до n символів і додає "..." якщо довший
 */

   export function capitalize(str) {
    // Ваш код тут:
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

}
export function truncate(str, n) {
    // Ваш код тут:
    if (str.length <= n) {
        return str;
    } else {
        return str.slice(0, n) + '...';
    }
}