// Напишіть програму, яка отримує вік користувача (збережіть у змінну) та виводить у консоль:
{ console.log("Завдання 1:");
let age = 15;

if (age < 12) {
    console.log("Дитина");
} else if (age >= 12 && age <= 17){
    console.log("Підліток");
} else if (age >=18 && age <= 64){
    console.log("Дорослий");
} else {
    console.log("Пенсіонер");
}
}

// Є числова оцінка від 0 до 100. Використовуючи switch(true) та умови в case, виведіть літерну оцінку:
{ console.log("Завдання 2:");
    var score = 81;
switch (true) {
    case (score>=90):
        console.log("A");
        break;
    case (score>=70):
        console.log("B");
        break;
    case (score>=50):
        console.log("C");
        break;
    case (score>=0):
        console.log("F");
        break;
    default:
        console.log("Wrong score");
}
}

// Створіть змінну month з числом від 1 до 12. Використовуючи switch з групуванням (без break між певними case), виведіть назву сезону:
{   console.log("Завдання 3:");
   var month = 1;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Літо");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осінь");
        break;
    default:
        console.log("Невірний місяць");
}
}

// Використовуючи цикл for, виведіть числа від 1 до 30. Але:
{   console.log("Завдання 4:");
    
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
}
}

// Дано число n (наприклад, 91). За допомогою циклу while знайдіть його найменший дільник більший за 1. Використайте break для виходу з циклу, як тільки дільник знайдено.

{   console.log("Завдання 5:");
    let n = 91;
    let divisor = 2;

    while (divisor <= n) {
        if (n % divisor === 0) {
            console.log("Найменший дільник для числа " + n + " це " + divisor);
            break;
        }
        divisor++;
    }
}

// Виведіть усі числа від 1 до 100, які НЕ містять цифру 3 та цифру 7. Використайте continue для пропуску "нещасливих" чисел.

{   console.log("Завдання 6:");
    
    for (let i = 1; i <= 100; i++) {
        if (String(i).includes('3') || String(i).includes('7')) {
            continue;
        }
        console.log(i);
    }
}

// Створіть функцію greet(name, greeting), яка повертає рядок привітання. Якщо name не передано - використовувати "Гість", якщо greeting не передано - "Привіт".

{   console.log("Завдання 7:"); 
    function greet(name = "Гість", greeting = "Привіт") {
        return console.log(greeting + ", " + name + "!");
    }
    greet() ;
    greet("Денис");
    greet("Оля", "Вітаю");
}

// Створіть змінну calculate. Використовуючи switch, присвойте їй різні Function Expression в залежності від значення змінної operation:

{   console.log("Завдання 8:");
    let operation = "multiply";
    let calculate;

    switch (operation) {
        case "add":
            calculate = function(a, b) {
                return a + b;
            };
            break;
        case "subtract":
            calculate = function(a, b) {
                return a - b;
            };
            break;
        case "multiply":
            calculate = function(a, b) {
                return a * b;
            };
            break;
        case "divide":
            calculate = function(a, b) {
                if (b !== 0) {
                    return a / b;
                } else {
                    return "Ділити на нуль не можна!";
                }
            };
            break;
       
    }

    console.log(calculate(6, 7)); 
}   

//Напишіть функцію repeatAction(n, callback), яка викликає передану функцію callback рівно n разів, передаючи їй поточний номер ітерації (починаючи з 1).

{   console.log("Завдання 9:");
    function repeatAction(n, callback) {
        for (let i = 1; i <= n; i++) {
            callback(i);
        }
    }

    repeatAction(3, function(i) {
        console.log(i);
    });
    repeatAction(4, function(i) {
        console.log("Крок " + i + " з 4");
    }); 
}

// Напишіть функцію generatePassword(length), яка генерує випадковий пароль заданої довжини із букв (великих та малих) і цифр. За замовчуванням довжина — 8 символів.
{   console.log("Завдання 10:");
    function generatePassword(length = 8) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return console.log(password);
    }
    
    generatePassword();
    generatePassword(12);
    generatePassword(2);
}