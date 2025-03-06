// /**
//  * Write your challenge solution here
//  */

// const digitalclock = document.querySelector(".digital-clock")
// const dateShow = document.querySelector(".date")
// const handhour = document.querySelector(".hour")
// const handminute = document.querySelector(".minute")
// const handsecond  = document.querySelector(".second")

// function time(){
//         const today = new Date()
//         let hours = today.getHours()
//         let minitus = today.getMinutes()
//         let second = today.getSeconds()
//         let nHours = ((hours / 12) * 360) + 90;
//         let nMinitues =  ((minitus / 60) * 360) + 90;
//         let nSeconds = ((second / 60) * 360) + 90;
//         digitalclock.innerText =`${checkZero(hours)}:${checkZero(minitus)}:${checkZero(second)}`
//         let date = today.toDateString()
//         dateShow.innerText = date
//         console.log("Hours",nHours)
//         console.log("Seconds",nMinitues)
//         console.log("Monitues",nSeconds)
//         rotateAnalogyClock(handhour,nHours)
//         rotateAnalogyClock(handminute, nMinitues)
//         rotateAnalogyClock(handsecond,nSeconds)
       
// }

// setInterval(time , 1000)

// time()

// function checkZero(value) {
//         if (value < 10) {
//         value = "0" + value
//         }
//         return value
// }



// function rotateAnalogyClock(clock,clockdeg) {
//         clock.style.transform = `rotate(${clockdeg})deg`   
// }

const digitalClock = document.querySelector(".digital-clock");
const dateShow = document.querySelector(".date");
const handHour = document.querySelector(".hour");
const handMinute = document.querySelector(".minute");
const handSecond = document.querySelector(".second");

function updateTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    
    let hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30;  // 360° / 12 hours + minute offset
    let minuteDegrees = minutes * 6;  // 360° / 60 minutes
    let secondDegrees = seconds * 6;  // 360° / 60 seconds

    digitalClock.innerText = `${checkZero(hours)}:${checkZero(minutes)}:${checkZero(seconds)}`;
    dateShow.innerText = today.toDateString();

    
    rotateAnalogClock(handHour, hourDegrees);
    rotateAnalogClock(handMinute, minuteDegrees);
    rotateAnalogClock(handSecond, secondDegrees);

    requestAnimationFrame(updateTime); // Ensures smoother updates
}

function checkZero(value) {
    return value < 10 ? "0" + value : value;
}

function rotateAnalogClock(element, degrees) {
    if (element) {
        element.style.transform = `rotate(${degrees}deg)`;
    }
}


updateTime();
