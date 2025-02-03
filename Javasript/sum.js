let myArray = [1,3,4,5,5,6]



function facaddtion(numbers){
    let sum = 0;

    for(let i = 0 ; i <  numbers.length; i++){
        sum = sum + i
        // sum+= numbers[i]   fancy style but works is same
    }


    return sum;
}


console.log(`Sum: ${facaddtion(myArray)}`)

let anotherResult =  facaddtion([4,8,9,7,6,7,6,2,3])
console.log(`My result is ${anotherResult}`);
