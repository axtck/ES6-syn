# Array methods

***Some example array methods and their usage***

---

## JS Array reference

### Properties
```javascript
constructor // Returns the function that created the Array object's prototype
length // Sets or returns the number of elements in an array
prototype // Allows you to add properties and methods to an Array object
```

### Methods
```javascript
concat() // Joins two or more arrays, and returns a copy of the joined arrays
copyWithin() // Copies array elements within the array, to and from specified positions
entries() // Returns a key/value pair Array Iteration Object
every() // Checks if every element in an array pass a test
fill() // Fill the elements in an array with a static value
filter() //	Creates a new array with every element in an array that pass a test
find() // Returns the value of the first element in an array that pass a test
findIndex() // Returns the index of the first element in an array that pass a test
forEach() // Calls a function for each array element
from() // Creates an array from an object
includes() // Check if an array contains the specified element
indexOf() // Search the array for an element and returns its position
isArray() // Checks whether an object is an array
join() // Joins all elements of an array into a string
keys() // Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf() // Search the array for an element, starting at the end, and returns its position
map() // Creates a new array with the result of calling a function for each array element
pop() // Removes the last element of an array, and returns that element
push() // Adds new elements to the end of an array, and returns the new length
reduce() // Reduce the values of an array to a single value (going left-to-right)
reduceRight() // Reduce the values of an array to a single value (going right-to-left)
reverse() // Reverses the order of the elements in an array
shift() // Removes the first element of an array, and returns that element
slice() // Selects a part of an array, and returns the new array
some() // Checks if any of the elements in an array pass a test
sort() // Sorts the elements of an array
splice() // Adds/Removes elements from an array
toString() // Converts an array to a string, and returns the result
unshift() // Adds new elements to the beginning of an array, and returns the new length
valueOf() // Returns the primitive value of an array
```

## Examples

Some example usage 
```javascript
['a', 'b', 'c'].length // 3
['a', 'b', 'c'].concat(['d', 'e']) // ['a', 'b', 'c', 'd', 'e']
['a', 'b', 'c'].join('_') // 'a_b_c'
['a', 'b', 'c'].slice(2) // ['c']
['a', 'b', 'c', 'b', 'b'].indexOf('b') // 1
['a', 'b', 'c', 'b', 'b'].lastIndexOf('b') // 4
[1, 2, 3, 4].map(item => item * 10) // [10, 20, 30, 40]
[1, 2, 3, 4].reduce((sum, cur) => sum + cur) // 10
[4, 2, 5, 1, 3].sort() // [1, 2, 3, 4, 5]
['a', 'b', 'c'].reverse() // ['c', 'b', 'a']
[1, 2, 3, 4].forEach(item => console.log(item))
[1, 2, 3, 4].every(item => item > 0) // true
[-1, -2, -3, 4].some(item => item > 0) // true
[1, -1, 2, -2, 3].filter(item => item > 0) // [1, 2, 3]
[1, 2, 3].shift() // 1; and base array = [2, 3]
[1, 2, 3].unshift(4, 5) // [4, 5, 1, 2, 3]
[1, 2, 3].pop() // 3; base array - [1, 2]
[1, 2, 3].push(4, 5) // 5; base array - [1, 2, 3, 4, 5]
["I'm", "learning", "JavaScript"].splice(1, 1) // ["learning"]; ["I'm", "JavaScript"]
```
([source](https://dev.to/sakhnyuk/js-array-cheatsheet-31h0))
