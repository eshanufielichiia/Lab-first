function Add(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
    return a + b;
}

function Sub(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
    return a - b;
}

function Mul(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
    return a * b;
}

function Div(a, b) {
    if (b === 0) {
        console.log("Помилка: Ділення на нуль неможливе!");
        return null;
    } else {
        console.log(`${a} / ${b} = ${a / b}`);
        return a / b;
    }
}

function calculator() {
    console.log("\n=== Калькулятор ===");

    let input1 = prompt("Введіть перше число:");
    let a = parseFloat(input1);

    if (isNaN(a)) {
        console.log("Помилка: Введіть коректне число!");
        return;
    }

    let input2 = prompt("Введіть друге число:");
    let b = parseFloat(input2);
    
    if (isNaN(b)) {
        console.log("Помилка: Введіть коректне число!");
        return;
    }
ї
    let operation = prompt("Виберіть операцію:\nAdd - додавання\nSub - віднімання\nMul - множення\nDiv - ділення");
 
    switch (operation) {
        case "Add":
        case "add":
        case "+":
            Add(a, b);
            break;
        case "Sub":
        case "sub":
        case "-":
            Sub(a, b);
            break;
        case "Mul":
        case "mul":
        case "*":
            Mul(a, b);
            break;
        case "Div":
        case "div":
        case "/":
            Div(a, b);
            break;
        default:
            console.log("Помилка: Невідома операція! Доступні: Add, Sub, Mul, Div");
    }
}

function calculateFromArgs(a, b, operation) {
    console.log(`\nОбчислення: ${a} ${operation} ${b}`);
    
    switch (operation) {
        case "Add":
        case "add":
        case "+":
            return Add(a, b);
        case "Sub":
        case "sub":
        case "-":
            return Sub(a, b);
        case "Mul":
        case "mul":
        case "*":
            return Mul(a, b);
        case "Div":
        case "div":
        case "/":
            return Div(a, b);
        default:
            console.log("Помилка: Невідома операція!");
            return null;
    }
}


console.log("=== ПРИКЛАД 1: Прямий виклик функцій ===");
Add(10, 5);      
Sub(10, 5);      
Mul(10, 5);      
Div(10, 5);      

console.log("\n=== ПРИКЛАД 2: Перевірка ділення на нуль ===");
Div(10, 0);      

console.log("\n=== ПРИКЛАД 3: Використання calculateFromArgs() ===");
calculateFromArgs(25, 4, "Add");   
calculateFromArgs(25, 4, "Sub");   
calculateFromArgs(25, 4, "Mul");   
calculateFromArgs(25, 4, "Div");   
calculateFromArgs(25, 0, "Div");   

console.log("\n=== ПРИКЛАД 4: Робота з від'ємними числами ===");
Add(-5, 3);     
Sub(-5, 3);      
Mul(-5, 3);     
Div(-5, 3);     