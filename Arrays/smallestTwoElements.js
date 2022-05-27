function solve(input) {
    input = input.sort((f, s) => f - s);
    let outputArr = input.slice(0, 2);
    console.log(outputArr.join(' '));
}

solve([30, 15, 50, 5]);