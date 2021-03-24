const cars = ["Audi", "BMW", "Mercedes", "Honda", "VW", "Peugeot"];

const carsSliced = cars.slice();
const firstTwo = cars.slice(0, 2);
const firstTwoOtherMethod = cars.slice(0, -4);
const middleTwo = cars.slice(2, 4);
const lastTwo = cars.slice(-2);
const lastTwoOtherMethod = cars.slice(4);

// Real example on manipulating a date string to outcome other format.
const cleanDate = d => `${d.slice(6)}/${d.slice(4, 6)}/${d.slice(0, 4)}`;

console.log(carsSliced);
console.log(firstTwo);
console.log(firstTwoOtherMethod);
console.log(middleTwo);
console.log(lastTwo);
console.log(lastTwoOtherMethod);

console.log(cleanDate("20201120"));