console.log('number' + 3 + 3);
//output: number33 concatenation

console.log(null + 3);
//output: 3 because null is treated as 0, so that's why result is 3

console.log(5 && "qwerty");
//output: qwerty because 5 is a truthy value, so the result is "qwerty"

console.log(+'40' + +'2' + "hillel");
//output: 42hillel because +'40' and +'2' convert strings to numbers (40 + 2 = 42), then "hillel" is concatenated → "42hillel"

console.log('10' - 5 === 6);
//output: false because '10' is converted to number 10, so 10 - 5 = 5, which is not equal to 6 → false

console.log(true + false);
//output: 1 true and false are converted to numbers (1 and 0), so 1 + 0 = 1

console.log('4px' - 3);
//output: NaN because "4px" can't be converted to a number, so result is NaN

console.log('4' - 3);
//output: 1 because '4' is converted to number 4, so 4 - 3 = 1

console.log('6' + 3 ** 0);
//output: 61 because '6' is a string, so 3 ** 0 equals 1, 1 is converted to string and concatenated → "61"

console.log(12 / '6');
//output: 2 because '6' is converted to number 6, so 12 / 6 = 2

console.log('10' + (5 === 6));
//output: 10false because 5 === 6 is false, which is converted to "false" and concatenated with '10'

console.log(null == '');
//output: false because null equals undefined, not an empty string

console.log(3 ** (9 / 3));
//output: 27 because 9 / 3 equals 3, so 3 ** 3 = 27

console.log(!!'false' == !!'true');
// output: true because both 'false' and 'true' are non-empty strings, so they convert to true, and true == true is true

console.log(0 || '0' && 1);
//output: 1 because '0' is a truthy value, so '0' && 1 returns 1, and 0 || 1 returns 1

console.log((+null == false) < 1);
//output: false because +null converts to 0, so 0 == false is true, then true converts to 1, so 1 < 1 is false

console.log(false && true || true);
//output: true because && runs first: false && true → false, then false || true → true

console.log(false && (false || true));
// output: false because with &&, the first false stops evaluation and the whole expression becomes false

console.log((+null == false) < 1 ** 5);
//output: false because +null converts to 0, so 0 == false is true, then true converts to 1, and 1 ** 5 equals 1, so 1 < 1 is false