function solve(array) {
    array.sort((f, s) => f.localeCompare(s));
    let num = 1;
    array.forEach(x => console.log(`${num++}.${x}`));
}

solve(["John", "Bob", "Christina", "Ema"]);