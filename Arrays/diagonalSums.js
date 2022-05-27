function solve(matrix) {
let firstDiagonal = 0;
let secindDiagonal = 0;

let length = matrix.length;

for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
        if (i == j) {
            firstDiagonal += matrix[i][j];
        }
        if ((i + j) == length - 1) {
            secindDiagonal += matrix[i][j];
        }
    }
}

console.log(firstDiagonal, secindDiagonal);
}

solve([[3, 5, 17],
       [-1, 7, 14],
       [2, -8, 89]]);
