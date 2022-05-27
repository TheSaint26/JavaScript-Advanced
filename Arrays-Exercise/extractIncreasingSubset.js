function solve(array) {
    
    let outputArr = [];
    let biggestElement = array[0];
    outputArr.push(biggestElement);

    for (let index = 1; index < array.length; index++) {
        let currentElement = array[index];
        if (currentElement >= biggestElement) {
            biggestElement = currentElement;
            outputArr.push(biggestElement);
        }
    }

    return outputArr;
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));