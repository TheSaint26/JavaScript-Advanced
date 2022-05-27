function solve(input) {
    let arr = [];

    for (const element of input) {
        let [townName, productName, price] = element.split(' | ');
        price = Number(price);
        let town = {townName, 
            productName, price};
        arr.push(town);
    }

    
    let products = {};

    for (const town of arr) {
        let townProductName = town.productName;
        if (!products[townProductName]) {
            products[townProductName] = town;
        } else if (products[townProductName].price > town.price) {
            products[townProductName] = town;
        }
    }
    
    Object.keys(products).forEach(x => {
        console.log(`${x} -> ${products[x].price} (${products[x].townName})`);
    });   
    
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);