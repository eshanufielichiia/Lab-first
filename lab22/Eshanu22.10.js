function reverseAndSquare(arr) {
    if (!Array.isArray(arr)) {
        console.log("Помилка: Аргумент має бути масивом!");
        return null;
    }

    let resultArray = [...arr];
в
    resultArray.reverse();
    
    for (let i = 0; i < resultArray.length; i++) {
        if (typeof resultArray[i] === "number" && !isNaN(resultArray[i]) && isFinite(resultArray[i])) {
         resultArray[i] = resultArray[i] ** 2;
        }
    }
    
    return resultArray;
}

function reverseAndSquareMap(arr) {
    if (!Array.isArray(arr)) {
        console.log("Помилка: Аргумент має бути масивом!");
        return null;
    }

    return [...arr].reverse().map(item => {
        return (typeof item === "number" && !isNaN(item) && isFinite(item)) ? item ** 2 : item;
    });
}


console.log("=== ПРИКЛАД 1: Масив з числами та рядками ===");
let array1 = [1, 2, "hello", 4, "world", 6];
console.log("Оригінальний масив:", array1);
console.log("Результат:", reverseAndSquare(array1));
console.log("Оригінал не змінився:", array1);

console.log("\n=== ПРИКЛАД 2: Масив тільки з числами ===");
let array2 = [3, 5, 7, 9, 11];
console.log("Оригінальний масив:", array2);
console.log("Результат:", reverseAndSquare(array2));

console.log("\n=== ПРИКЛАД 3: Масив з різними типами даних ===");
let array3 = [10, "текст", true, 2.5, null, 8, {name: "obj"}, [1, 2]];
console.log("Оригінальний масив:", array3);
console.log("Результат:", reverseAndSquare(array3));

console.log("\n=== ПРИКЛАД 4: Масив з від'ємними числами ===");
let array4 = [-2, -4, -6, -8];
console.log("Оригінальний масив:", array4);
console.log("Результат (квадрат від'ємного числа - додатний):", reverseAndSquare(array4));

console.log("\n=== ПРИКЛАД 5: Порожній масив ===");
let array5 = [];
console.log("Оригінальний масив:", array5);
console.log("Результат:", reverseAndSquare(array5));

console.log("\n=== ПРИКЛАД 6: Масив з нулями ===");
let array6 = [0, 1, 2, 3];
console.log("Оригінальний масив:", array6);
console.log("Результат (0^2 = 0):", reverseAndSquare(array6));

console.log("\n=== ПРИКЛАД 7: Використання map-версії ===");
let array7 = [4, 5, "test", 6];
console.log("Оригінальний масив:", array7);
console.log("Результат (map-версія):", reverseAndSquareMap(array7));

console.log("\n=== ДЕТАЛЬНИЙ РОЗБІР ===");
let exampleArray = [1, 2, 3, 4, 5];
console.log("Крок 1: Оригінальний масив →", exampleArray);

let reversed = [...exampleArray].reverse();
console.log("Крок 2: Перевернутий масив →", reversed);

let squared = reversed.map(x => x ** 2);
console.log("Крок 3: Квадрати чисел →", squared);

console.log("\n✅ Підсумок:", reverseAndSquare(exampleArray));