function solve(input) {
    let firstNum = Number(input.shift());
    let lastNum = Number(input.pop()) || 0;
    return firstNum + lastNum;
}