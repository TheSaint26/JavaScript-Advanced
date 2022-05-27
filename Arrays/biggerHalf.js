function solve(input) {
    let middleIndex = input.length % 2 == 0 ? input.length / 2 : (input.length + 1) / 2;
    let outputArr = input.sort((f, s) => s - f).slice(0, middleIndex).reverse();
    
    return outputArr;
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);