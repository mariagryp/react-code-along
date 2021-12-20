//spread on array
const fruits = ["apple", "banana", "pear"];

const junk = ["chips", "pizza", "cola"];
const junkCopy = [...junk];
const fruitsCopy = [...fruits];

console.log(fruitsCopy);
console.log(junkCopy);

const food = [...fruits, ...junk];
console.log(food);

//spread an object on array
const car = {
    brand: "volvo",
    model: "XC40",
};

const carCopy = {...car, color: "blue"};

console.log(carCopy);