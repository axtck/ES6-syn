# Logic

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
