/**
 * Write your challenge solution here
 */

const toggleBtn = document.querySelector("#toggleButton")
const bulb  = document.querySelector("#bulb")
const sst = document.querySelector(".switch-status")


let count = true
toggleBtn.addEventListener("click", function(){
    BulfColor()
})


function BulfColor() {

    if (count === true) {
        bulb.className = "bulb on"
    sst.innerHTML = "Status : On"
    toggleBtn.innerHTML = "Turn Off"  
        count = false
    }else{
        bulb.className = "bulb off"
        sst.innerHTML = "Status : Off"
        toggleBtn.innerHTML = "Turn on" 
        count = true
    }
    
}


