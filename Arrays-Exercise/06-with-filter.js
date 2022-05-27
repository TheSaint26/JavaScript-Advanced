function solve(array) {

    let max = Number.MIN_SAFE_INTEGER;

    let outputArr = array.filter(el => {
        if (el >= max) {
            max = el;
            return true;
        } else {
            return false;
        }
    });

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