function processArray(arr) {
    let max = Math.max(...arr);

    let min = Math.min(...arr);

    let sum = arr.reduce((acc, val) => acc + val, 0);

    let average = sum / arr.length;
 
    let oddValues = arr.filter(val => val % 2 !== 0);

    console.log("Масив:", arr);
    console.log("Найбільше значення:", max);
    console.log("Найменше значення:", min);
    console.log("Сума елементів:", sum);
    console.log("Середнє арифметичне:", average);
    console.log("Непарні значення:", oddValues);

    return {
        max: max,
        min: min,
        sum: sum,
        average: average,
        oddValues: oddValues
    };
}

function createRandomArray(N, minValue = -100, maxValue = 100) {
    let arr = [];
    for (let i = 0; i < N; i++) {
        let randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        arr.push(randomValue);
    }
    return arr;
}

console.log("=== Приклад 1: Масив заданий вручну ===");
let manualArray = [15, 42, 7, 23, 91, 8, 36, 19, 54, 2];
processArray(manualArray);

console.log("\n=== Приклад 2: Випадковий масив з 10 елементів ===");
let randomArray = createRandomArray(10, -50, 50);
processArray(randomArray);

console.log("\n=== Приклад 3: Випадковий масив з 8 елементів ===");
let randomArray2 = createRandomArray(8, 1, 100);
processArray(randomArray2);

console.log("\n=== Приклад 4: Масив з від'ємними числами ===");
let negativeArray = [-15, 42, -7, 23, -91, 8, -36, 19, -54, 2];
processArray(negativeArray);