function removeDuplicatesSet(arr) {
    if (!Array.isArray(arr)) {
        console.log("Помилка: Аргумент має бути масивом!");
        return null;
    }
    
    return [...new Set(arr)];
}

function removeDuplicatesFilter(arr) {
    if (!Array.isArray(arr)) {
        console.log("Помилка: Аргумент має бути масивом!");
        return null;
    }
    
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

function removeDuplicatesLoop(arr) {
    if (!Array.isArray(arr)) {
        console.log("Помилка: Аргумент має бути масивом!");
        return null;
    }
    
    let uniqueArray = [];
    let seen = {};  
    
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (!seen[item]) {
            uniqueArray.push(item);
            seen[item] = true;  
        }
    }
    
    return uniqueArray;
}

function removeDuplicatesReduce(arr) {
    if (!Array.isArray(arr)) {
        console.log("Помилка: Аргумент має бути масивом!");
        return null;
    }
    
    return arr.reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);
}


console.log("=== ПРИКЛАД 1: Заданий у завданні масив ===");
let inputArray = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log("Вхідний масив:", inputArray);
console.log("Результат (Set):", removeDuplicatesSet(inputArray));
console.log("Результат (filter):", removeDuplicatesFilter(inputArray));
console.log("Результат (loop):", removeDuplicatesLoop(inputArray));
console.log("Результат (reduce):", removeDuplicatesReduce(inputArray));

console.log("\n=== ПРИКЛАД 2: Масив з рядками ===");
let stringArray = ["яблуко", "банан", "яблуко", "апельсин", "банан", "груша"];
console.log("Вхідний масив:", stringArray);
console.log("Результат:", removeDuplicatesSet(stringArray));

console.log("\n=== ПРИКЛАД 3: Масив з різними типами даних ===");
let mixedArray = [1, "1", 1, "2", 2, "1", true, false, true, null, null, undefined, undefined];
console.log("Вхідний масив:", mixedArray);
console.log("Результат (зверніть увагу: 1 і '1' - різні значення):", removeDuplicatesSet(mixedArray));

console.log("\n=== ПРИКЛАД 4: Масив з об'єктами (Set не підходить для об'єктів) ===");
let objectArray = [
    {id: 1, name: "A"},
    {id: 2, name: "B"},
    {id: 1, name: "A"},  
    {id: 3, name: "C"}
];
console.log("Вхідний масив (об'єкти):", objectArray);
console.log("Результат (об'єкти вважаються різними, навіть якщо вміст однаковий):", removeDuplicatesSet(objectArray));

console.log("\n=== ПРИКЛАД 5: Порожній масив ===");
let emptyArray = [];
console.log("Вхідний масив:", emptyArray);
console.log("Результат:", removeDuplicatesSet(emptyArray));

console.log("\n=== ПРИКЛАД 6: Масив з одним елементом ===");
let singleArray = [42, 42, 42, 42];
console.log("Вхідний масив:", singleArray);
console.log("Результат:", removeDuplicatesSet(singleArray));

console.log("\n=== ПРИКЛАД 7: Масив з від'ємними числами ===");
let negativeArray = [-1, -2, -1, -3, -2, -4];
console.log("Вхідний масив:", negativeArray);
console.log("Результат:", removeDuplicatesSet(negativeArray));

console.log("\n=== ПОРІВНЯННЯ ШВИДКОСТІ ===");

let largeArray = [];
for (let i = 0; i < 10000; i++) {
    largeArray.push(Math.floor(Math.random() * 1000));
}

console.log("Розмір великого масиву:", largeArray.length);

console.time("Set method");
removeDuplicatesSet(largeArray);
console.timeEnd("Set method");

console.time("Filter method");
removeDuplicatesFilter(largeArray);
console.timeEnd("Filter method");

console.time("Loop method");
removeDuplicatesLoop(largeArray);
console.timeEnd("Loop method");

console.time("Reduce method");
removeDuplicatesReduce(largeArray);
console.timeEnd("Reduce method");