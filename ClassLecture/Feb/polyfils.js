const arr = [ 1, 2 , 3 , 4 ,5,6]

//Error : .foreachfunction does not exist on arr vaiable

//Real Signture lo samjo  - No return , function input, value, index
// calls my fn for every value

if (!Array.prototype.myForeach) {
    Array.prototype.myForeach = function(userfunction){
        const originalArr = this // current object ki tarf context kaarta hai

        for (let i = 0; i < originalArr.length; i++) {
            userfunction(originalArr[i], i)
        }
    }
}

const ret = arr.myForeach( function(value,index){
    // console.log(`my for each value at index   ${index} is ${value} `);
    
});
// console.log(`Ret is `,ret)




// Signature .map
// return ? - New Array , each element Iterate, UserFn , orinal array vaisa hi hota hai






if(!Array.prototype.myMap){
    Array.prototype.myMap = function (userFn) {
        const result = [];

        for(let i = 0; i < this.length; i++){
           const value =  userFn(this[i], i)
           result.push(value)
        }
        return result;
    };
}

const n = arr.map((e) => e * 2)
const n2 = arr.myMap((e) => e * 3)
console.log(n)
console.log(arr)
console.log(n2);


//filter 
//Signature : retun new arry | input : userFn,
// agar use ka function true return karta hai toh current value lo lo nwe array mai

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userFn) {
        const result = []

        for (let i = 0; i < this.length; i++) {
           if (userFn(this[i])) {
            result.push(this[i])
           }
        }


        return result;
    }
}


const n3  = arr.myFilter((e) => e % 3 ===0 );
console.log(n3)



// reduce
// signature :