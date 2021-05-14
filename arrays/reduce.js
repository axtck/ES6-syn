/*
The reduce() method executes a reducer function (that you provide) on each element of the array,
resulting in single output value.
*/

const numbers = [8, 8, 12, 4, 5, 7, 7, 22, 4];

console.log("Accumulated values:");
const logAcc = numbers.reduce((acc, val) => {
    console.log(acc);
    return acc + val;
});
// expected output: log accumulated values

console.log("Separate values:");
const logVal = numbers.reduce((acc, val) => {
    console.log(val);
    return acc + val;
});
// expected output: log separate values

const total = numbers.reduce((acc, val) => acc + val);
console.log("Total:");
console.log(total);
// expected output: total value

const totalWithInitialValue = numbers.reduce((a, b) => a + b, 10);
console.log("Total with initial value:");
console.log(totalWithInitialValue);
// expected output: total value + initial value (10)

const findMin = numbers.reduce((a, b) => a < b ? a : b);
console.log("Find min value:");
console.log(findMin);
// expected output: min value

const findMax = numbers.reduce((a, b) => a > b ? a : b);
console.log("Find max value:");
console.log(findMax);
// expected output: max value

const lineItems = [
    { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
    { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
    { description: 'Butter', quantity: 2, price: 6, total: 12 }
];

// this works, but is less composable
const priceSum = lineItems.reduce((acc, val) => {
    return acc + val.price;
}, 0);

// instead, map first
const priceSumBetter = lineItems.map((item) => item.price).reduce((acc, val) => {
    return acc + val;
}, 0);

console.log("Find total by property:");
console.log("Method 1:");
console.log(priceSum);
console.log("Method 2:");
console.log(priceSumBetter);

