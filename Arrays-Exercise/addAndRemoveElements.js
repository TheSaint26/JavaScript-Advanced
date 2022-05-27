function solve(array) {
    let value = 1;
    let outputArr = [];

    for (let command of array) {
        switch (command) {
            case 'add':
                add();
                break;
            case 'remove':
                remove();
                break;
        }
    }
    if (outputArr.length > 0) {
    outputArr.forEach(element => console.log(element));
    } else {
        console.log('Empty');
    }

    function add() {
        outputArr.push(value++);
    }

    function remove() {
        outputArr.pop();
        value++;
    }
}

solve(['add', 
'add', 
'add', 
'add']);

solve(['add', 
'add', 
'remove', 
'add', 
'add']);