function solve(rows, cols) {
    let matrix = [];

    for (let row = 0; row < rows; row++) {
        matrix.push([]);
    }

    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;
    let value = 1;

    while (startRow <= endRow && startCol <= endCol) {

        for (let col = startCol; col <= endCol; col++) {
            matrix[startRow][col] = value++;
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            matrix[row][endCol] = value++;
        }
        endCol--;
        
        for (let col = endCol; col >= startCol; col--) {
            matrix[endRow][col] = value++;
        }
        endRow--;

        for (let row = endRow; row >= startRow; row--) {
            matrix[row][startCol] = value++;
        }
        startCol++;
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

solve(5, 5);