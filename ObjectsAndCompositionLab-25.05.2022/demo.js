const person = {
    name: 'Peter',
    age: 23
};

console.log(person.age);

person.name = 'John';

console.log(person);

person.lastname = 'Jackson';

console.log(person);

const propName = 'age'
console.log(person[propName]);

person.age = undefined;
console.log(person);

delete person.age;
console.log(person);