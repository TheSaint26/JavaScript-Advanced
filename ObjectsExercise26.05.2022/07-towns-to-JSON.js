function solve(input) {
    let arrayOfTowns = [];

    for (let index = 1; index < input.length; index++) {
        let element = input[index].split(/\s*\|\s*/);
        let lat = Number(element[2]).toFixed(2).padEnd(0);
        let long = Number(element[3]).toFixed(2).padEnd(0);
        let townObj = {
            Town: element[1],
            Latitude: Number(lat),
            Longitude: Number(long),
        };
        arrayOfTowns.push(townObj);
    }

    let out = JSON.stringify(arrayOfTowns);
    console.log(out);
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);