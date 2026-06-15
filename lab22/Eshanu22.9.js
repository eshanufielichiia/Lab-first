function analyzeNumber(num) {
    console.log("\n" + "=".repeat(50));
    console.log(`Аналіз числа: ${num}`);
    console.log("=".repeat(50));

    console.log("\n--- Позитивність / Негативність ---");
    if (num > 0) {
        console.log(`Число ${num} є позитивним`);
    } else if (num < 0) {
        console.log(`Число ${num} є негативним`);
    } else {
        console.log(`Число ${num} дорівнює нулю`);
    }

    console.log("\n--- Перевірка на просте число ---");
    let isPrime = true;
    
    if (num <= 1) {
        isPrime = false;
    } else if (num === 2) {
        isPrime = true;
    } else {
        for (let i = 2; i <= Math.sqrt(Math.abs(num)); i++) {
            if (Math.abs(num) % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    if (isPrime && num > 1) {
        console.log(`Число ${num} є простим`);
    } else {
        console.log(`Число ${num} НЕ є простим`);
    }

    console.log("\n--- Подільність без залишку ---");

    let absNum = Math.abs(num);

    if (absNum % 2 === 0) {
        console.log(`✓ ${num} ділиться на 2 (${num} / 2 = ${num / 2})`);
    } else {
        console.log(`✗ ${num} НЕ ділиться на 2`);
    }

    if (absNum % 5 === 0) {
        console.log(`✓ ${num} ділиться на 5 (${num} / 5 = ${num / 5})`);
    } else {
        console.log(`✗ ${num} НЕ ділиться на 5`);
    }

    if (absNum % 3 === 0) {
        console.log(`✓ ${num} ділиться на 3 (${num} / 3 = ${num / 3})`);
    } else {
        console.log(`✗ ${num} НЕ ділиться на 3`);
    }

    if (absNum % 6 === 0) {
        console.log(`✓ ${num} ділиться на 6 (${num} / 6 = ${num / 6})`);
    } else {
        console.log(`✗ ${num} НЕ ділиться на 6`);
    }

    if (absNum % 9 === 0) {
        console.log(`✓ ${num} ділиться на 9 (${num} / 9 = ${num / 9})`);
    } else {
        console.log(`✗ ${num} НЕ ділиться на 9`);
    }
    
    console.log("\n" + "=".repeat(50));

    return {
        number: num,
        isPositive: num > 0,
        isNegative: num < 0,
        isZero: num === 0,
        isPrime: isPrime && num > 1,
        divisibleBy2: absNum % 2 === 0,
        divisibleBy5: absNum % 5 === 0,
        divisibleBy3: absNum % 3 === 0,
        divisibleBy6: absNum % 6 === 0,
        divisibleBy9: absNum % 9 === 0
    };
}

function analyzeNumberSimple(num) {
    console.log(`\nЧисло: ${num}`);

    if (num > 0) console.log("  - Позитивне");
    else if (num < 0) console.log("  - Негативне");
    else console.log("  - Нуль");

    let isPrime = num > 1;
    for (let i = 2; i <= Math.sqrt(num) && isPrime; i++) {
        if (num % i === 0) isPrime = false;
    }
    console.log(`  - Просте: ${isPrime ? "Так" : "Ні"}`);

    console.log("  - Подільність:");
    console.log(`    на 2: ${num % 2 === 0 ? "Так" : "Ні"}`);
    console.log(`    на 5: ${num % 5 === 0 ? "Так" : "Ні"}`);
    console.log(`    на 3: ${num % 3 === 0 ? "Так" : "Ні"}`);
    console.log(`    на 6: ${num % 6 === 0 ? "Так" : "Ні"}`);
    console.log(`    на 9: ${num % 9 === 0 ? "Так" : "Ні"}`);
}


console.log("\n🔹 ПРИКЛАД 1: Додатне число 28");
analyzeNumber(28);

console.log("\n🔹 ПРИКЛАД 2: Від'ємне число -15");
analyzeNumber(-15);

console.log("\n🔹 ПРИКЛАД 3: Просте число 17");
analyzeNumber(17);

console.log("\n🔹 ПРИКЛАД 4: Нуль");
analyzeNumber(0);

console.log("\n🔹 ПРИКЛАД 5: Число 90");
analyzeNumber(90);

console.log("\n🔹 ПРИКЛАД 6: Просте число 2");
analyzeNumber(2);

console.log("\n🔹 ПРИКЛАД 7: Число 1");
analyzeNumber(1);

console.log("\n\n📌 СПРОЩЕНА ВЕРСІЯ ФУНКЦІЇ:");
analyzeNumberSimple(42);