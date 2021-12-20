//forEach -iterates over array and perfomers action on every value

const cars = ["volvo", "Renault", "Audi", "Mazda"];

/* cars.forEach((car, index, array) => {
    // console.log(car, index, array); 
    console.log("Tjohej");
});

cars.forEach((car) => {
    if(car === "volvo"){
        alert("I'm Swedish");
    }
    else{
        alert("I'm not swedish");
    }
}); */

//map - iterates over an array and returns new array based on the org arrays values//return an array
const dogs = ["Golden", "Tax", "Border Collie"];

const bigDogs = dogs.map((dog) => {
    return dog.toUpperCase();
});

console.log(dogs, bigDogs);


const realCars = [{brand: "Volvo", year: 2020},
{brand:" Mazda", year: 2020},
{brand:"Audi", year: 2021},
];
document.querySelector("#car-list").innerHTML = realCars.map((car) => `<div>
<p>${car.brand}</p>
<p>${car.year}</p>
</div>`).join("");


//filter - iterates over array and returns a new array with values filtered from the original array
const foods = ["Apple", "Burger", "Pizza"];

const filteredFoods = foods.filter((food) => food !== "Apple");
console.log(foods, filteredFoods);


const allCars = [
{brand: "Volvo", year: 2020, country: "Swedish"},
{brand:" Mazda", year: 2020,country: "German"},
{brand:"Audi", year: 2021,country: "German"},
{brand:"Saab", year: 2021,country: "Swedish"},
];

const sweCars = allCars.filter((car)=> car.country === "Swedish");
const germanCars = allCars.filter((car)=> car.country === "German");

document.querySelector("#german-cars").innerHTML = 
germanCars.map(car => `<div><p>${car.brand}</p></div>`).join("");

document.querySelector("#swedish-cars").innerHTML = 
germanCars.map(car => `<div><p>${car.brand}</p></div>`).join("");

//reduce - reduces array to a single value by iterating over all of the arrays values and performs computation on them
const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((sumOfNumbs, num) => sumOfNumbs + num, 0);

console.log(sum);

//shopping cart example with reduce 
const basket = [
    {name: "Chips", price:20},
    {name: "Pasta", price:20},
    {name: "Cola", price:20},  
    {name: "Pizza", price:20},  
];

document.querySelector("#products").innerHTML = basket.map((product) => `<p>Product: ${product.name}
<br /> Price: ${product.price}kr</p>`)
.join("");

const productPrices = basket.map((product) => product.price);

/* console.log(productPrices) */

document.querySelector("#total-price").innerHTML = `${productPrices.reduce((totalPrice, price) => 
    totalPrice + price)} kr`;


//Some - iterates over array and returns either true or false depending on if any value in the array meets a conditional condition
const fruits = ["Apple", "Banana", "Orange","Pear"];
const result = fruits.some((fruit) => fruit === "Kiwi");

console.log(result);

const checkFruit = (passedFruit) => {
    if(fruits.some((fruit) => fruit === passedFruit)){
        alert("That fruit exists")
    }else{
        alert("No exists");
    
    }
};
checkFruit("Grape")