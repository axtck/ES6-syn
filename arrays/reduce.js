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


const characters = [
    { name: 'Jean-Luc Picard', age: 59 },
    { name: 'Will Riker', age: 29 },
    { name: 'Deanna Troi', age: 29 }
];

const charactersAgeCount = characters.map(item => item.age).reduce((acc, val) => {
    if (acc[val] == null) acc[val] = 1;
    else acc[val]++;
    return acc;
}, {}); // initial value is object

console.log("\nCount age occurences and create object");
console.log("characters", JSON.stringify(characters));
console.log("Result", JSON.stringify(charactersAgeCount));

const sentencePieces = ["First", "three", "words", "", "another", "two", "", "", "last"];

const conditionallyJoined = sentencePieces.reduce((acc, val) => {
    // if value and last item of acc are truthy, join by space
    if (val && acc[acc.length - 1]) acc[acc.length - 1] += " " + val;
    // otherwise, push value
    else acc.push(val);
    return acc;
}, []); // initial value is array

console.log("\nConditionally join array");
console.log("sentencePieces", JSON.stringify(sentencePieces));
console.log("Result", JSON.stringify(conditionallyJoined));
