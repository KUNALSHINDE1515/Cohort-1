// Beginner Level:
// Polyfill for Array.prototype.map()
// Write a polyfill for the map() function, which applies a given function to each element of an array and returns a new array.

if(!Array.prototype.Mymap){
    Array.prototype.Mymap = function (UserFunctions) {
        let result = []
 
        for (let i = 0; i < this.length; i++) {
            const element = UserFunctions( this[i] , i)
            result.push(element)
        }

        return result;
    }
}

let arr = [ 1,2,3,4,5,6]
const res = arr.Mymap( (element) => element * 2)
// console.log(res)


// Polyfill for Array.prototype.filter()
// Implement a polyfill for the filter() method, which returns a new array containing only the elements that pass a given condition.

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userFn){
        let newFilterArray = []
        for (let i = 0; i < this.length; i++) {
            if (userFn(this[i])) {
                newFilterArray.push(this[i])
            }
        }
        return newFilterArray;
    }
}

const ans = arr.myFilter((res) => res% 3 ===0 )
// console.log(ans)

// Polyfill for Array.prototype.forEach()
// Write a polyfill for the forEach() method, which executes a provided function once for each array element.
if (!Array.prototype.MyForeach) {
    Array.prototype.MyForeach = function userFn() {
        for (let i = 0; i < this.length; i++) {
            userFn(this[i], i)  
        }
    }
}

// Polyfill for Array.prototype.reduce()
// Implement a polyfill for reduce(), which applies a function to accumulate values from an array.

Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    let accumulator = initialValue;
    let startIndex = 0;

    // If initialValue is not provided, use the first element as accumulator
    if (accumulator === undefined) {
        if (this.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

// Example usage:
const numbers = [1, 2, 3, 4];
const sum = numbers.myReduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10


// Intermediate Level:
// Polyfill for Function.prototype.bind()
// Write a polyfill for bind(), which returns a new function with this set to a specified object.

// Polyfill for Array.prototype.some()
// Implement a polyfill for some(), which checks if at least one element in an array satisfies a condition.

// Polyfill for Array.prototype.every()
// Write a polyfill for every(), which checks if all elements in an array satisfy a given condition.

// Polyfill for Object.create()
// Implement a polyfill for Object.create(), which creates a new object with the given prototype.

// Advanced Level:
// Polyfill for Promise
// Write a basic polyfill for JavaScript's Promise class, including then() and catch() methods.

// Polyfill for setTimeout() and setInterval()
// Implement your own version of setTimeout() and setInterval() using JavaScript's Date and setImmediate().

// Polyfill for localStorage (in-memory alternative)
// Create a simple polyfill for localStorage that stores key-value pairs in memory.

// Polyfill for requestAnimationFrame()
// Implement requestAnimationFrame() using setTimeout() if it's not available.

// Bonus Challenge:
// Polyfill for deepClone() (Deep Copy Function)
// Write a function that deeply clones an object, handling nested objects and arrays.

// Polyfill for debounce() and throttle()
// Implement debounce() to delay function execution and throttle() to limit execution rate.

// Polyfill for String.prototype.trim()
// Write a polyfill for trim() that removes whitespace from both ends of a string.