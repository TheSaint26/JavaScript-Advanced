function solve(primeObject) {

    let resultObject = {};

    resultObject.model =  primeObject.model;

    let smallEngine = {power: 90, volume: 1800};
    let normalEngine = {power: 120, volume: 2400};
    let monsterEngine = {power: 200, volume: 3500};

    if (primeObject.power <= 90) {
        resultObject.engine = smallEngine;
    } else if (primeObject.power <= 120) {
        resultObject.engine = normalEngine;
    } else {
        resultObject.engine = monsterEngine;
    }

    let carriage = {
        type: primeObject.carriage,
        color: primeObject.color,
    };

    resultObject.carriage = carriage;
    
    let size = primeObject.wheelsize;
    if (size % 2 === 0) {
        size--;
    }

    let wheels = [size, size, size, size];
    resultObject.wheels = wheels;
    
    return resultObject;
}

solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });