function towns(list) {
    const result = {};

    for (const town of list) {
        const tokens = town.split(' <-> ');
        const name = tokens[0];
        const population = Number(tokens[1]);

        if (!result[name]) {
        result[name] = population;
        } else {
            result[name] += population;
        }
    }

    for (let town in result) {
        console.log(`${town} : ${result[town]}`);
    }

    /*for (let[name, population] of Object.entries(result)) {
        console.log(`${name} : ${population}`);
    }*/
}

towns(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);

console.log('--------------------')

towns(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);