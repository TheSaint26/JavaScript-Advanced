function solve(array) {
    let length = array.length;

    let outputArr = [];

    for (let index = 0; index < length; index += 2) {
        outputArr.push(array[index]);
    }

    console.log(outputArr.join(' '));
}

solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);