// 🔹 Basic Loop Questions (1-15)

// Print numbers from 1 to 10 using a loop.
for (let index = 1; index <= 10; index++) {
    // console.log(index)
    
}
// Print even numbers from 1 to 20.
for (let index = 1; index <= 20; index++) {
    if(index % 2 === 0){
        // console.log(index)
    }
    
}
// Print odd numbers from 1 to 20.
for (let index = 1; index <= 20; index++) {
    if(index % 2 !== 0){
        // console.log(index)
    }
    
}
// Find the sum of numbers from 1 to 50.
let num = 50
let sum = 0
for (let index = 0; index <= num; index++) {
    sum = index + sum
}
// console.log(sum);

// Find the sum of even numbers from 1 to 50.
let num1 = 50
let sumEven = 0
for (let index = 1; index <= num1; index++) {
    if (index % 2 === 0) {
        sum = index + sum
    }
}
// console.log(sumEven);
// Find the sum of odd numbers from 1 to 50.
let sumofoddNum = 0
for(let i =0; i <= num; i++){
    if (i % 2 !==0) {
        sumofoddNum = sumofoddNum + i
    }
}
// console.log(sumofoddNum)
// Print numbers from 10 to 1 in reverse order.
let num2 = 10
for(let i = num2; i > 0 ; i--){
    // console.log(i)
}

// Print the multiplication table of 5 using a loop.

for (let i = 1; i <=10 ; i++) {
    // console.log(`5 * ${i} = ${i * 5} `)
    
}
// Print all elements of an array using a for loop.
let array = [1,2,3,4,5,6,7,"shindr"]

for(let i = 0; i < array.length;i++){
    // console.log(array[i])
}
// Count the number of digits in a number using a loop.
let countNumber = 123456
let rd = countNumber.toString()
// console.log(typeof rd);
// console.log(rd.length)

// Find the factorial of a given number.
let factorial = 5
let fact = 1
for (let i = 1; i <= factorial; i++) {
   fact = fact * i
}
// console.log(fact)
// Reverse a given number (e.g., 12345 → 54321).
let nums = 12345
let str = nums.toString().split('').reverse().join('');
// console.log(str);


let fnu = 987654321
let fnum = fnu.toString()
let revese = ""
for (let i = fnum.length - 1; i>= 0; i--) {
    revese = revese + fnum[i]
    
}
// console.log(revese)

// Print the Fibonacci series up to n terms.

function fibonacci(nums) {
    let num1 = 0
    let num2 = 1
    console.log(num1)
    if (nums > 1) {
        console.log(num2)
    }

    for (let i = 2; i < nums ; i++) {
       let next = num1 + num2
       console.log(next)
       num1 = num2
       num2 = next 
        
    }
}
// fibonacci(5)
// Print the sum of digits of a number.
let digits = 12345678
let str1 = digits.toString().split('')
console.log(str1)
let sums = 0
for (let i = 0; i <= str1.length; i++) {
    sums = sums + i
}
console.log(sums)
// Check whether a number is prime or not.

function prime(num) {
    if (num % 2 === 0) {
        console.log(`${num} is prime number.`)
    }else{
        console.log(`${num} is not a prime number`)
    }
}

prime(3)


// 🔹 Intermediate Loop Questions (16-35)

// Print numbers divisible by 3 and 5 between 1 and 100.

for (let i = 1; i <=100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i)
    }
}
// Print numbers from 1 to 100, but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz".
// Find the GCD (HCF) of two numbers using loops.
// Find the LCM of two numbers using loops.
// Count the number of vowels in a string.
// Print all numbers of an array greater than 50.
// Print the smallest number in an array.
// Print the largest number in an array.
// Find the second largest number in an array.
// Check if a string is a palindrome (e.g., "madam", "racecar").
// Remove duplicate elements from an array.
// Find the sum of all elements in an array.
// Count the occurrences of each element in an array.
// Find the frequency of characters in a string.
// Rotate an array left by one position.
// Rotate an array right by one position.
// Print all elements of an object using a loop.
// Convert a decimal number to binary using loops.
// Convert a binary number to decimal using loops.
// Check whether two numbers are amicable numbers or not.


// 🔹 Advanced Loop Questions (36-50)



// Find the sum of prime numbers from 1 to 100.
// Check if a number is an Armstrong number (e.g., 153 = 1³ + 5³ + 3³).
// Generate a pyramid pattern using loops.
// Generate an inverted pyramid pattern using loops.
// Generate a diamond pattern using loops.
// Print the Pascal’s Triangle.
// Find the sum of an AP (Arithmetic Progression) series using a loop.
// Find the sum of a GP (Geometric Progression) series using a loop.
// Implement the Bubble Sort algorithm using loops.
// Implement the Selection Sort algorithm using loops.
// Implement the Insertion Sort algorithm using loops.
// Implement the Binary Search algorithm using loops.
// Implement the Floyd’s Triangle using loops.
// Find the nth Fibonacci number using a loop.
// Find the sum of the first n natural numbers using a loop.
