function solve(input) {
    let height = input[0];
    let width = input[1];

    let startRow = input[2];
    let startCol = input[3];

    let matrix = [];

    for (let row = 0; row < height; row++) {
        matrix.push([]);
    }

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(Math.abs(startRow - row), Math.abs(startCol - col)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

solve([4, 4, 0, 0]);