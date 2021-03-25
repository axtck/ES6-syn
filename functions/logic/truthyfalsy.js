const checkNullOrUndefined = (val) => {
    if (val == null) return console.log(`${val} is null or undefined.`);
    return console.log(`${val} is not null or undefined.`);
}

console.log("----- Check for null or undefined -----");
checkNullOrUndefined(undefined);
checkNullOrUndefined(null);
checkNullOrUndefined("Some value");
checkNullOrUndefined(NaN);
checkNullOrUndefined("");
checkNullOrUndefined(0);
checkNullOrUndefined(false);
console.log("---------------------------------------");

const checkNullOrUndefinedStrict = (val) => {
    if (val === null || val === undefined) return console.log(`${val} is null or undefined.`);
    return console.log(`${val} is not null or undefined.`);
}

console.log("----- Check for null or undefined strict -----");
checkNullOrUndefinedStrict(undefined);
checkNullOrUndefinedStrict(null);
checkNullOrUndefinedStrict("Some value");
checkNullOrUndefinedStrict(NaN);
checkNullOrUndefinedStrict("");
checkNullOrUndefinedStrict(0);
checkNullOrUndefinedStrict(false);
console.log("----------------------------------------------");

const checkTruthyOrFalsy = (val) => {
    if (val) return console.log(`${val} is truthy.`);
    return console.log(`${val} is falsy.`);
}

console.log("----- Check for truthy or falsy -----");
checkTruthyOrFalsy("Some value"); // expected truthy
checkTruthyOrFalsy(25);
checkTruthyOrFalsy({ name: "Alexander" });
checkTruthyOrFalsy([{}]);
checkTruthyOrFalsy(undefined); // expected falsy
checkTruthyOrFalsy(null);
checkTruthyOrFalsy(NaN);
checkTruthyOrFalsy("");
checkTruthyOrFalsy(0);
checkTruthyOrFalsy(false);
console.log("-------------------------------------");

const logicalAndOperator = (val1, val2) => {
    console.log(val1 && val2);
}

console.log("----- Logical AND for 2 values -----");
logicalAndOperator(false, "dog"); // false
logicalAndOperator("dog", false); // false
logicalAndOperator("dog", "cat"); // cat
console.log("------------------------------------");

const logicalAndOperator2 = (val1, val2, val3) => {
    console.log(val1 && val2 && val3);
}

console.log("----- Logical AND for 3 values -----");
logicalAndOperator2(false, false, "dog"); // false 
logicalAndOperator2("dog", false, "cat"); // false
logicalAndOperator2("dog", "dog", "cat"); // cat
logicalAndOperator2("dog", 4, 25); // 25 
console.log("-------------------------------------");

const logicalOrOperator = (val1, val2) => {
    console.log(val1 || val2);
}

console.log("----- Logical OR -----");
logicalOrOperator(false, "dog"); // dog
logicalOrOperator("dog", false); // dog
logicalOrOperator("dog", "cat"); // dog
console.log("----------------------");
