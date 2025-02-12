// task - 1
const tea = {
    name : "Lemon tea",
    type : "Green tea",
    coffine : "low"
}

// task - 2
console.log(tea.name)
console.log(tea.type)

// tak : 3
tea.origin = "chaina"
console.log(tea)

// task 5
tea.coffine = "Medium"

// task - 5
delete tea.type

// task - 6
console.log("origin" in tea)

// task - 7
for(let key in tea){
    console.log(`${key} : ${tea[key]}`)
}

// task -7

const myTeas ={
    greentea:{
        name: 'Green Tea'
    },
    blackTea:{
        name :"Black tea"
    }
}

// task - 8
const teaCopy = {...tea}