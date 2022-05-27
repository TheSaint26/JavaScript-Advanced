function solve(input) {
    let object = {};
    while (input.length > 0) {
        let foodName = input.shift();
        let calories = Number(input.shift());
        object[foodName] = calories;
    }
    console.log(object);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);