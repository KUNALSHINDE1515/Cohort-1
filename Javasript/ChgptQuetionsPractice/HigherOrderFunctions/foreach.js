
// 🟠 FOREACH Questions (20)
// Print each element in an array.
let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.forEach(function (element) {
//     console.log(element)
// })
// Print the index and value of each element in an array.

// arr.forEach(function (element , index) {
//     console.log(`Index : ${index} values :${element}`)
// })

// Multiply each number by 2 and print the result.
// arr.forEach(function (element ) {
//     console.log(`${element} * 2  => ${element * 2}`)
// })

// Print only the even numbers from an array.
arr.forEach( (nums) => {
    if (nums % 2 !==0) {
        console.log(nums)
    }
})
// Convert each string in an array to uppercase and print it.

// Append "!" to each word in an array and log it.
// Print "Even" if a number is even and "Odd" otherwise.
// Print the square of each number in an array.
// Log the length of each string in an array.
// Print the sum of all elements without using reduce().
// Create a new array manually by pushing squared values inside forEach.
// Log all names from an array of objects {name, age}.
// Modify an existing array in place by doubling each number.
// Print whether each number is prime or not.
// Count how many times a particular word appears in an array.
// Print all elements that start with the letter "S".
// Print "Passed" if a student's marks are above 40, otherwise "Failed".
// Log all elements of an array in reverse order.
// Remove elements that are "null" or "undefined" using forEach().
// Change all negative numbers in an array to their absolute values.