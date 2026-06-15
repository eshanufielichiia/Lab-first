function createRandomMatrix(rows = 5, cols = 5, minValue = -50, maxValue = 50) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            let randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            row.push(randomValue);
        }
        matrix.push(row);
    }
    return matrix;
}

function replaceDiagonal(matrix) {
    let newMatrix = matrix.map(row => [...row]);
    
    for (let i = 0; i < 5; i++) {
        if (newMatrix[i][i] < 0) {
            newMatrix[i][i] = 0;      
        } else if (newMatrix[i][i] > 0) {
            newMatrix[i][i] = 1;      
        }
    }
    return newMatrix;
}

function printMatrix(matrix, title = "Матриця") {
    console.log(`\n${title}:`);
    for (let i = 0; i < matrix.length; i++) {
        let rowString = "";
        for (let j = 0; j < matrix[i].length; j++) {
            let value = matrix[i][j];
            if (value >= 0 && value < 10) {
                rowString += ` ${value}  `;
            } else if (value < 0 && value > -10) {
                rowString += `${value}  `;
            } else if (value >= 10) {
                rowString += `${value}  `;
            } else {
                rowString += `${value} `;
            }
        }
        console.log(rowString);
    }
}


console.log("=== ПРИКЛАД 1: Випадкова матриця ===");
let randomMatrix = createRandomMatrix(5, 5, -20, 20);
printMatrix(randomMatrix, "Оригінальна матриця");
let transformedMatrix1 = replaceDiagonal(randomMatrix);
printMatrix(transformedMatrix1, "Матриця після заміни на головній діагоналі");

console.log("\n=== ПРИКЛАД 2: Матриця із заданими значеннями ===");
let manualMatrix = [
    [-5,  12,   7,  -3,  8],
    [ 4, -12,   9,   6, -2],
    [11,   8, -15,   5, 10],
    [ 7,  -4,  13, -20,  3],
    [ 9,   6,  -8,  14, 25]
];
printMatrix(manualMatrix, "Оригінальна матриця");
let transformedMatrix2 = replaceDiagonal(manualMatrix);
printMatrix(transformedMatrix2, "Матриця після заміни на головній діагоналі");

console.log("\n=== ПРИКЛАД 3: Матриця з нулями на діагоналі ===");
let zeroDiagonalMatrix = [
    [ 0,   5,   8,  -2,   3],
    [ 7,   0,  -4,   6,   9],
    [ 1,  -3,   0,   4,  -5],
    [ 6,   2,  -7,   0,   8],
    [-9,   4,   2,  -1,   0]
];
printMatrix(zeroDiagonalMatrix, "Оригінальна матриця");
let transformedMatrix3 = replaceDiagonal(zeroDiagonalMatrix);
printMatrix(transformedMatrix3, "Матриця після заміни на головній діагоналі");