function solve(array) {
    let dashBoard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let rowLength = dashBoard.length;
    let colLength = dashBoard[0].length;

    let win = false;

    let mark = 'X';

    for (let i = 0; i < array.length; i++) {
        let row = Number(array[i].split(' ')[0]);
        let col = Number(array[i].split(' ')[1]);
        if (isAllTaken()) {
            break;
        }
        if (!dashBoard[row][col]) {
            dashBoard[row][col] = mark;
            if (wins(mark)) {
                console.log(`Player ${mark} wins!`);
                win = true;
                break;
            }
            if (mark == 'X') {
                mark = 'O';
            } else {
                mark = 'X';
            }
        } else {
            console.log('This place is already taken. Please choose another!');
            
        }

    }

    if (win) {
        printDashBoard();
    } else {
        console.log('The game ended! Nobody wins :(');
        printDashBoard();
    }

    function wins(mark) {
        let isWin = false;
        let temp = JSON.stringify([mark, mark, mark]);

        //check rows
        for (let row = 0; row < rowLength; row++) {
            if (JSON.stringify(dashBoard[row]) == temp) {
                isWin = true;
                return isWin;
            }
        }

        //check columns
        for (let col = 0; col < colLength; col++) {
            let currentColumn = [];
            for (let row = 0; row < rowLength; row++) {
                currentColumn.push(dashBoard[row][col]);
            }
            if (JSON.stringify(currentColumn) == temp) {
                isWin = true;
                return isWin;
            }
        }

        //check diagonals
        let primaryDiagonal = [];
        let secondaryDiagonal = [];
        for (let row = 0; row < rowLength; row++) {
            for (let col = 0; col < colLength; col++) {
                if (row == col) {
                    primaryDiagonal.push(dashBoard[row][col]);
                }
                if ((row + col) == rowLength - 1) {
                    secondaryDiagonal.push(dashBoard[row][col]);
                }
            }
        }
        if (JSON.stringify(primaryDiagonal) == temp) {
            isWin = true;
        }
        if (JSON.stringify(secondaryDiagonal) == temp) {
            isWin = true;
        }

        return isWin;
    }

    function isAllTaken() {
        for (let row = 0; row < rowLength; row++) {
            for (let col = 0; col < colLength; col++) {
                if (dashBoard[row][col] == false) {
                    return false;
                }
            }
        }
        return true;
    }

    function printDashBoard() {
        let spaces = '	';
        
        for (let row = 0; row < rowLength; row++) {
            console.log(dashBoard[row].join(spaces));
        }

    }
}


//solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
//solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
