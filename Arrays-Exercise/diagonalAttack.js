function solve(input) {
    let matrix = [];

    for (let element of input) {
        matrix.push(element.split(' ').map(Number));
    }

    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    let rowLength = matrix.length;
    let colLength = matrix[0].length;

    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            if (row == col) {
                primaryDiagonalSum += matrix[row][col];
            }
            if ((row + col) == rowLength - 1) {
                secondaryDiagonalSum += matrix[row][col];
            }
        }
    }

    if (primaryDiagonalSum == secondaryDiagonalSum) {
        for (let row = 0; row < rowLength; row++) {
            for (let col = 0; col < colLength; col++) {
                if (!(row == col) && !((row + col) == rowLength - 1)) {
                    matrix[row][col] = primaryDiagonalSum;
                }
            }
        }
    }

    printMatrix();

    function printMatrix() {
        for (let row = 0; row < rowLength; row++) {
            console.log(matrix[row].join(' '));
        }
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);