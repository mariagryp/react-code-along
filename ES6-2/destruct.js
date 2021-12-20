//destructures array

const cars = ["Volvo", "Ford", "BMW"];

/* const volvo = cars[0];
const ford = cars[1];
const bmw = cars[2];

console.log(ford); */

const [car1, car2, car3] = cars;

console.log(car1);
console.log(car3);
console.log(car2);

//destructures objects

const props = {
    fname: "Maria",
    occupation: "developer",
    age: 36
}

/* const cfName = props.fname;
const cOccupation = props.occupation;
console.log(cfName); 
console.log(cOccupation);  */

const {occupation, fname, age} = props
console.log(occupation);
console.log(fname);