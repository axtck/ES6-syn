const person = {
    name: "Alexander",
    age: 22,
    student: true
};

console.log("person object", JSON.stringify(person));
console.log("person.name", person.name);
console.log(`person["name"]`, person["name"]);

// example occurences of ages 
const counterStatus = {
    22: 1, // 1 22y old
    25: 2 // 2 25y olds
};

console.log("\ncounterStatus object", JSON.stringify(counterStatus));
console.log("counterStatus[22]", counterStatus[22]); // index by number
console.log(`counterStatus["22"]`, counterStatus["22"]); // index by number

console.log("\nSet objects property to a property value from another object");
const randomObject = {
    [person.name]: 1
};

console.log("[person.name]: 1");
console.log(JSON.stringify(randomObject));

console.log("\nAssigning properties by only using variable name");
const smell = "roses";
const brand = "niceSmelling";
const durability = "good";

const deodorant = { smell, brand, durability };

console.log(`const smell = "roses";
const brand = "niceSmelling";
const durability = "good";`);
console.log("{ smell, brand, durability }");

console.log(JSON.stringify(deodorant));