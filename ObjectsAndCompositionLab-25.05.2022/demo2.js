const myMap = {
    'John': '+1-555-12334',
    'Mary': '+2-345-12445',
    'Bob': '+1-555-45454'
};

for (const key in myMap) {
    console.log(key, myMap[key]);
}