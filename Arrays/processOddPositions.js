function solve(input) {
    let newArr = [];

    for (let index = 1; index < input.length; index += 2) {
        newArr.push(input[index]);
    }

    return newArr.map(element => element *= 2).reverse();
}

solve([10, 15, 20, 25]);