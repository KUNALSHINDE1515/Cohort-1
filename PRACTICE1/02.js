// Implement a function mapAsync that works like Array.prototype.map, but handles asynchronous callback functions. It should take an array and an async callback function, and return a Promise that resolves with a new array of results





async function name(array, callback) {

    const results = [];
    for(let i = 0; array.length; i++){
        const value =  await callback(array[i])

        results.push(value);
    }
    
    
    return results; 
    
}

function longestWord(string) {

    const words = string.split(" ");
    console.log(`here are the ${ typeof words}`);
    

    let wordslength = "";
    console.log("result" ,wordslength);
    

    for (const word of words) {
        if (word.length > longestWord.length) {
            wordslength =word;
        }
    }
    return wordslength;
}

longestWord("hello my name is kunal")