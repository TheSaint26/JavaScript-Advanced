function solve(matrix) {
    let firstRowSum = matrix[0].reduce((acc, value) => acc += value, 0);
    
    let isMagical = true;

    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i].reduce((acc, value) => acc += value, 0) !== firstRowSum) {
            isMagical = false;
            break;
        }
    }

    if (isMagical) {
        let colLength = matrix[0].length;
        let rowLength = matrix.length;

        for (let col = 0; col < colLength; col++) {
            let sum = 0;
            for (let row = 0; row < rowLength; row++) {
                sum += matrix[row][col];
            }
            if (sum !== firstRowSum) {
                isMagical = false;
                break;
            }
        }
    }

    console.log(isMagical);
}

solve([[4, 5, 6],
       [6, 5, 4],
       [5, 5, 5]]);

       solve([[11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]]);