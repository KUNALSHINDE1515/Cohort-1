// task - 1

const teas = ["green tea", "Black tea", 'ooloong tea', 'white tea', 'herbal tea']
// console.log(teas);

// task - 2
teas.push("Chamonile Tea");
// console.log(teas)

// task - 3
const index =  teas.indexOf("ooloong tea")
// console.log(index)
if (index > -1) {
    teas.splice(index , 1)
}
// console.log(teas);


// task - 4
const result = teas.filter((items) => items !== "herbal tea")
// console.log(result);


// task - 5
const alphbeticalOrder = teas.sort()
// console.log(alphbeticalOrder)


// Task - 6
for(let i = 0; i < teas.length; i++){
    // console.log(teas[i])
}

// task -7
let total = 0
for(let i = 0; i < teas.length; i++){
    if (teas[i] !== "herbal tea") {
        // total = total + i
        // total++
        total = total + 1
        }
   
}
// console.log(total)

const newArray = []

for(let i = 0; i < teas.length;i++){
    newArray.push(teas[i].toLocaleUpperCase())
    
    
}
// console.log(newArray)

// task - 9

let longesttea =""
for (let i = 0; i < teas.length; i++) {
    if (teas[i].length > longesttea.length) {
        longesttea = teas[i]
    }
}
// console.log(longesttea)

const reverseArray = []
for(let i = teas.length - 1; i >= 0; i--){
    reverseArray.push(teas[i])
}
console.log(reverseArray)