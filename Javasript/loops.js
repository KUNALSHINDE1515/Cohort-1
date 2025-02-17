// const coding = ['jss', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach( (item) => {
//     // console.log(item)
//     return item
// })

// console.log(values)


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNums.filter( (filter) => {
// return filter > 4
// })


// const  newnums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newnums.push(num)
//     }
// })
// console.log(newnums)



const munumbers = [1,2,3,5,4,6,7,8,9,10]

// const nwens = munumbers.map( (ele) => { return ele + 10})

const newns = munumbers
                .map( function(items) { return items * 10})
                .map(function(num) {return num + 1})
                .filter( (nums) => (nums >= 40))
// console.log(newns);



const unums = [1,2,3]

// const myTotal = unums.reduce(function (acc,curr) {
//     console.log(`acc :${acc} and currval :${curr}`)
//     return acc + curr
// }, 0)


const myTotal = unums.reduce((prev,next) => (prev + next),0)
// console.log(myTotal)



const shoppingCart = [
    {
        itemName: "Js course",
        price: 299
    },
    {
        itemName: "Python",
        price: 499
    },
    {
        itemName: "Cohorts",
        price: 5400
    },
    {
        itemName: "Data science",
        price: 12999
    },
]


let shoppingTotal = shoppingCart.reduce((acc, currval) => ( acc + currval.price),0)
console.log(shoppingTotal)