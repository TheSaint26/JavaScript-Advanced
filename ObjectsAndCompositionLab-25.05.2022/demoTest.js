const car1 = {
    model: 'Race car',
    start() {
        console.log(`${this.model} says vroom`);
    }
};

const car2 = {
    model: 'Station wagon',
    start: car1.start
};

car2.start();