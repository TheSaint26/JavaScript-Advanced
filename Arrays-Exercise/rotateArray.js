function solve(array, rotations) {

    for (let i = 0; i < rotations; i++) {
        let element = array.pop();
        array.unshift(element);
    }

    console.log(array.join(' '));
}

solve(['1', 
'2', 
'3', 
'4'], 
2);