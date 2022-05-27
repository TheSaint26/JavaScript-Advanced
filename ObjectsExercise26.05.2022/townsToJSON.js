function solve(arr) {
    let result = [];
    class Town {
        constructor(name, latitude, longitude) {
            this.Town = name;
            this.Latitude = latitude;
            this.Longitude = longitude;
        }
    }

    for (let index = 1; index < arr.length; index++) {
        let array = arr[index].split('|').map(t => t.trim()).filter(x => x.length > 0);
        let townName = array[0];
        let latitude = Number(array[1]).toFixed(2).padEnd(0);
        let longitude = Number(array[2]).toFixed(2).padEnd(0);
        let town = new Town(townName, Number(latitude), Number(longitude));
        result.push(town);
    }

    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']));