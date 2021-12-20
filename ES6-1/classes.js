class Car {
    constructor(brand, year){
        this.brand = brand;
        this.year = year;
    }

    start= () => {
        return `wroom, I'm a ${this.brand}`;
    };
}

const car = new Car("Ford", 2021);
const car2 = new Car("volvo",2018);

/* console.log(car.start());
console.log(car2.start());
 */
//sub class

class CarModel extends Car{
    constructor(brand, year, model){
        super(brand, year);
        this.model = model;
    }
    start2 = () => {
        return `${this.start()} and I am of the model ${this.model}`
    }
}

const model = new CarModel("SaaB", 2017, "XC60");
console.log(model.start());
console.log(model.start2());