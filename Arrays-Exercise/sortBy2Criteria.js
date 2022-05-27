function solve(array) {
    array.sort((f, s) => f.length - s.length || f.localeCompare(s));

    console.log(array.join('\n'));
}

solve(['alpha', 
'beta', 
'gamma']);