let fname = "hitesh"
let fname2 = fname

// console.log(fname) //"Hitesh"
fname ="piyush" // any change of fname that will not go to fname 2  or any change of fname2 voh fname mai nahi jayege this will be only copy

// console.log(fname);
// console.log(fname2)

let p1 = {
    fname: 'Hitesh',
    lname: "ch",
    address:{
        h: 1,
        s: 2
    }

}
const p1kaString = JSON.stringify(p1)
let p2 = JSON.parse(p1kaString)
p2.address.h = 2
p2.fname ='piyush'
p2.lname= 'garg'
console.log(p2);
console.log(p1)



