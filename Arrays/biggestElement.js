function solve(matrix) {
    let biggestElement = Number.NEGATIVE_INFINITY;
    
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > biggestElement) {
                biggestElement = matrix[row][col];
            }
        }
    }

    return biggestElement;
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);