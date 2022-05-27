function solve(input) {
    let outputArr = [];

    for (let num of input) {
        if (num < 0) {
            outputArr.unshift(num);
        } else {
            outputArr.push(num);
        }
    }

    outputArr.forEach(element => console.log(element));
}

solve([7, -2, 8, 9]);
