// watch out when comparing, should be &&
const calculateWrong = (a, b, action) => {
    if (action !== "+" || action !== "-") return; // will always evaluate to true
    if (action === "+") return a + b;
    if (action === "-") return a - b;
    return "Something went wrong";
};

const calc1 = calculateWrong(1, 2, "-");
console.log(calc1);

const calculateRight = (a, b, action) => {
    if (action !== "+" && action !== "-") return; // fix   
    if (action === "+") return a + b;
    if (action === "-") return a - b;
    return "Something went wrong";
};

const calc2 = calculateRight(1, 2, "-");
console.log(calc2);