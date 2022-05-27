function solve() {
    let dashBoard = [
        [false, false, false],
        [false, false, false],
        ['X', 'X', 'X']
    ];

    /*let mark = 'X';
    let temp = [mark, mark, mark];

    let isWin = false;

    for (let row = 0; row < dashBoard.length; row++) {
        if (JSON.stringify(dashBoard[row]) == JSON.stringify(temp)) {
            isWin = true;
            break;
        }
    }

    console.log(isWin);*/

    for (let row = 0; row < dashBoard.length; row++) {
        console.log(dashBoard[row].join(' '));
    }
}

solve();