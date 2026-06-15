function isDivisibleIf(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}

function isDivisibleTernary(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
}

function isDivisibleSimple(n, x, y) {
    return (n % x === 0) && (n % y === 0);
}

console.log("=== Спосіб 1: з if ===");
console.log(isDivisibleIf(12, 3, 4));   
console.log(isDivisibleIf(12, 3, 5));  
console.log(isDivisibleIf(20, 4, 5));  
console.log(isDivisibleIf(20, 3, 4));   

console.log("\n=== Спосіб 2: з тернарним оператором ===");
console.log(isDivisibleTernary(12, 3, 4));   
console.log(isDivisibleTernary(12, 3, 5));   
console.log(isDivisibleTernary(20, 4, 5));   
console.log(isDivisibleTernary(20, 3, 4));   

console.log("\n=== Спосіб 3: без if і тернарного оператора ===");
console.log(isDivisibleSimple(12, 3, 4)); 
console.log(isDivisibleSimple(12, 3, 5));   
console.log(isDivisibleSimple(20, 4, 5));  
console.log(isDivisibleSimple(20, 3, 4));  