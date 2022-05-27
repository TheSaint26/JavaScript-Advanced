function solve(input) {
    let heroesArr = [];

    for (let element of input) {
        let arr = element.split(' / ');
        let[name, level, items] = arr;
        level = Number(level);
        items = items ? items.split(', ') : [];
        let hero = {name, level, items};
        heroesArr.push(hero);
    }

    console.log(JSON.stringify(heroesArr));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);

solve(['Jake / 1000 / Gauss, HolidayGrenade']);
