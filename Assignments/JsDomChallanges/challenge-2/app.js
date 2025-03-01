/**
 * Write your challenge solution here
 */


// const text = document.getElementById("mainHeading")
// const redBtn = document.getElementById("redButton")
// const greenButton = document.getElementById("greenButton")
// const blueButton = document.getElementById("blueButton")
// const purpleButton = document.getElementById("purpleButton")
// const resetButton = document.getElementById("resetButton")


// redBtn.addEventListener("click", function (){
//     text.id = "redButton"
// })

// greenButton.addEventListener("click", function (){
//     text.id = "greenButton"
// })
// blueButton.addEventListener("click", function (){
//     text.id = "blueButton"
// })
// purpleButton.addEventListener("click", function (){
//     text.id = "purpleButton"
// })
// resetButton.addEventListener("click", function (){
//     text.id = "resetButton"
// })


const buttons = document.querySelectorAll(".color-buttons")
const mainHeading = document.querySelector("H1")
buttons.forEach((e) =>{
    e.addEventListener("click", (e) =>{
        console.log(e.target.id)
        mainHeading.style.color = e.target.id 
    })
})



