// 90  >= A
// 80 >= B
// 70 >= c
//60 >= D
// F

let Grade;
function facCalculation(factoryRecevingData){
    if (factoryRecevingData >= 90) {
        Grade = "A"
    }else if (factoryRecevingData >=80){
        Grade = "B"
    }else if(factoryRecevingData >=70){
        Grade= "C"
    }else if (factoryRecevingData >= 60){
        Grade = "D"
    }else{
        Grade = "Fail"
    }
    return Grade;
}
facCalculation(80)
console.log(`Result is ${Grade}`);

 