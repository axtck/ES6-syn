# Logic

***Important logic operations with js***

## Truthy and Falsy values

---

### Truthy

In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

JavaScript uses type coercion in Boolean contexts.

Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):

```javascript
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

---

### Falsy

A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

Falsy values:

```javascript
false // The keyword false.
0 // The Number zero (so, also 0.0, etc., and 0x0).
-0 //The Number negative zero (so, also -0.0, etc., and -0x0).
0n, -0n //The BigInt zero and negative zero (so, also 0x0n/-0x0n).
"", '', `` // Empty string value.
null // null — the absence of any value.
undefined // undefined — the primitive value.
NaN // NaN — not a number.
document.all // Objects are falsy if and only if they have the [[IsHTMLDDA]] internal slot.
```

Examples of falsy values in JavaScript (which are coerced to false in Boolean contexts, and thus bypass the if block):

```javascript
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")

```

---

### The logical OR operator ||

In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.

```javascript
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```

OR "||" finds the first truthy value

The logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript.

The extended algorithm works as follows.

Given multiple OR’ed values:

```javascript
result = value1 || value2 || value3;
```

The OR || operator does the following:

* Evaluates operands from left to right.
* For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
* If all operands have been evaluated (i.e. all were false), returns the last operand.

A value is returned in its original form, without the conversion.

In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

For instance:

```javascript
alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 5 || 1 ); // 5 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)
```

This leads to some interesting usage compared to a “pure, classical, boolean-only OR”.

1. Getting the first truthy value from a list of variables or expressions.

For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values).

Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):

```javascript
let firstName = "";
let lastName = "";
let nickName = "axtck";

alert( firstName || lastName || nickName || "Anonymous"); // axtck
```

2. Short-circuit evaluation.

Another feature of OR || operator is the so-called “short-circuit” evaluation.

It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

That importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

In the example below, only the second message is printed:

```javascript
true || alert("not printed");
false || alert("printed");
```

In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.

---

### The logical AND operator &&

In classical programming, AND returns true if both operands are truthy and false otherwise:

```javascript
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```

AND “&&” finds the first falsy value

Given multiple AND’ed values:

```javascript
result = value1 && value2 && value3;
```

The AND && operator does the following:

* Evaluates operands from left to right.
* For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
* If all operands have been evaluated (i.e. all were truthy), returns the last operand.

In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

Examples:

```javascript
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
```

We can also pass several values in a row. See how the first falsy one is returned:

```javascript
alert( 1 && 2 && null && 3 ); // null
```

When all values are truthy, the last value is returned:

```javascript
alert( 1 && 2 && 3 ); // 3, the last one
```

---


## Nullish coalescing

### Nullish coalescing operator 

The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

This can be contrasted with the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined. In other words, if you use || to provide some default value to another variable foo, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., '' or 0). See below for more examples.

The nullish coalescing operator has the fifth-lowest operator precedence, directly lower than || and directly higher than the conditional (ternary) operator.

Syntax:

```javascript
leftExpr ?? rightExpr
```

Example code, in this example, we will provide default values but keep values other than null or undefined:

```javascript
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42
```

Pitfalls using || for assigning a default value:

```javascript
let foo;

//  foo is never assigned any value so it is still undefined
let someDummyText = foo || 'Hello!';
```

However, due to || being a boolean logical operator, the left hand-side operand was coerced to a boolean for the evaluation and any falsy value (0, '', NaN, null, undefined) was not returned. This behavior may cause unexpected consequences if you consider 0, '', or NaN as valid values.

```javascript
let count = 0;
let text = "";

let qty = count || 42;
let message = text || "hi!";
console.log(qty);     // 42 and not 0
console.log(message); // "hi!" and not ""
```

The nullish coalescing operator avoids this pitfall by only returning the second operand when the first one evaluates to either null or undefined (but no other falsy values):

```javascript
let myText = ''; // An empty string (which is also a falsy value)

let notFalsyText = myText || 'Hello world';
console.log(notFalsyText); // Hello world

let preservingFalsy = myText ?? 'Hi neighborhood';
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)
```

## Optional chaining

### Optional chaining operator

The optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid. The ?. operator functions similarly to the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.

Optional chaining cannot be used on a non-declared root object, but can be used with an undefined root object.

Syntax:

```javascript
obj.val?.prop
obj.val?.[expr]
obj.arr?.[index]
obj.func?.(args)
```

The optional chaining operator provides a way to simplify accessing values through connected objects when it's possible that a reference or function may be undefined or null.

For example, consider an object obj which has a nested structure. Without optional chaining, looking up a deeply-nested subproperty requires validating the references in between, such as:

```javascript
let nestedProp = obj.first && obj.first.second;
```

The value of obj.first is confirmed to be non-null (and non-undefined) before then accessing the value of obj.first.second. This prevents the error that would occur if you accessed obj.first.second directly without testing obj.first.

With the optional chaining operator (?.), however, you don't have to explicitly test and short-circuit based on the state of obj.first before trying to access obj.first.second:

```javascript
let nestedProp = obj.first?.second;
```

By using the ?. operator instead of just ., JavaScript knows to implicitly check to be sure obj.first is not null or undefined before attempting to access obj.first.second. If obj.first is null or undefined, the expression automatically short-circuits, returning undefined.

This is equivalent to the following, except that the temporary variable is in fact not created:

```javascript
let temp = obj.first;
let nestedProp = ((temp === null || temp === undefined) ? undefined : temp.second);
```

A lot of this is referenced from the [Mozilla Web Docs](https://developer.mozilla.org/en-US/)
