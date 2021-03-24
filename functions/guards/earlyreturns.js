const person1 = { name: "Jeff" };
const person2 = { age: 16 };
const person3 = { age: 19 };
const person4 = { age: 24 };

const canDrink = (person) => {
    if (person?.age == null) return "Age not specified";
    return canDrinkResponse(person.age);
}

const canDrinkResponse = (age) => {
    if (age < 18) return "No";
    if (age < 21) return "Not in US";
    return "Yes";
}

console.log(canDrink(person1));
console.log(canDrink(person2));
console.log(canDrink(person3));
console.log(canDrink(person4));
