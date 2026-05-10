/**
  Файл 3: utils/index.js  ← ТІЛЬКИ re-exports, жодної логіки
   - Re-export усього з strings.js та numbers.js
 */

export { capitalize, truncate } from './strings.js';
export { clamp, randomInt } from './numbers.js';