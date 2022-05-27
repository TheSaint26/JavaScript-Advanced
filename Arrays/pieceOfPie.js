function solve(array, firstFlavor, secondFlavor) {
    let firstIndex = array.indexOf(firstFlavor);
    let secondIndex = array.indexOf(secondFlavor);
    return array.slice(firstIndex, secondIndex + 1);
}

solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');