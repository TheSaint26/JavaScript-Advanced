function solve(input) {
    let productsArr = [];

    for (const element of input) {
        let data = element.split(' : ');
        let product = {
            productName: data[0],
            productPrice: Number(data[1]),
        }
        productsArr.push(product);
    }

    productsArr = productsArr.sort((a, b) => a.productName.localeCompare(b.productName));

    
    let firstLetter;

    for (const currentProduct of productsArr) {
        if (firstLetter != currentProduct.productName[0]) {
            firstLetter = getFirstLetter(currentProduct);
            console.log(firstLetter);
        }
        console.log(` ${currentProduct.productName}: ${currentProduct.productPrice}`);
    }

    function getFirstLetter(obj) {
        return obj.productName[0];
    }

}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);

solve(['Banana : 2',
'Rubic`s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']);