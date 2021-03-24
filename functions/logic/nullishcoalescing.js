// without checking
const calcPriceWithoutCheck = (price, taxes, description) => {
    const total = price * (1 + taxes);
    console.log(`${description} with tax: €${total}.`);
}

console.log("Without check:");
calcPriceWithoutCheck(100, 0.07, "First item without check");
calcPriceWithoutCheck(100, 0, "Other item without check");
calcPriceWithoutCheck(100, undefined, "Undefined item without check"); // passing undefined

// with checking old way
const calcPriceWithCheckOld = (price, taxes, description) => {
    taxes = taxes || .05;
    description = description || "Default item";
    const total = price * (1 + taxes);
    console.log(`${description} with tax: €${total}.`);
}

console.log("With checking the old way:");
calcPriceWithCheckOld(100, 0.07, ""); // empty string is falsy but will be default value 
calcPriceWithCheckOld(100, undefined, "Undefined item with old check"); // tax undefined so will be default value
calcPriceWithCheckOld(100, 0, "Item with 0 tax"); // passing 0 as tax value (0 is falsy) 
// the 0 will be defaulted because it is falsy, this is not the wanted behaviour

// with checking with nullish coalescing
const calcPrice = (price, taxes, description) => {
    taxes = taxes ?? 0.05;
    description = description ?? "Default item";
    const total = price * (1 + taxes);
    console.log(`${description} with tax: €${total}.`);
}

console.log("With checking with nullish coalescing:");
calcPrice(100, 0.07, null); // empty string is falsy but will be default value 
calcPrice(100, undefined, "Undefined item with old check"); // tax undefined so will be default value
calcPrice(100, 0, "Item with 0 tax"); // passing 0 as tax value (0 is falsy) 
// the 0 will be defaulted because it is falsy, this is not the wanted behaviour

// this is the same but less clean
const calcPrice2 = (price, taxes, description) => {
    if (taxes == null) {
        taxes = .05;
    }
    if (description == null) {
        description = "Default item";
    }
    const total = price * (1 + taxes);
    console.log(`${description} with tax: €${total}.`);
}

console.log("With the same result other way:")
calcPrice(100, 0.07, null); // empty string is falsy but will be default value 
calcPrice(100, undefined, "Undefined item with old check"); // tax undefined so will be default value
calcPrice(100, 0, "Item with 0 tax"); // passing 0 as tax value (0 is falsy) 
// the 0 will be defaulted because it is falsy, this is not the wanted behaviour
