function solve(array) {
    array.sort((f, s) => f - s);

    let outputArr = [];

    while (array.length > 0) {
        outputArr.push(array.shift());
        outputArr.push(array.pop());
    }

    outputArr.filter(x => typeof x !== 'undefined');

    return outputArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));