// /**
//  * Write your challenge solution here
//  */
// // Image data
// const images = [
//   {
//     url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     caption: 'Beautiful Mountain Landscape',
//   },
//   {
//     url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     caption: 'Ocean Sunset View',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     caption: 'Autumn Forest Path',
//   },
//   {
//     url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     caption: 'Urban City Skyline',
//   },
// ];

// const carouselTrack = document.getElementById("carouselTrack")
// const captionC = document.querySelector(".carousel-caption")
// const nextButton = document.querySelector("#nextButton")
// const Indicater = document.querySelectorAll(".carousel-indicator")
// const autoPlayButton = document.getElementById("autoPlayButton")
// let count = 0

// nextButton.addEventListener("click", () =>{
//   Indicater[count].classList.remove("active");
//   count++;
//   if (count === 4) {
//     count = 0
//   }
//   imageCrousale()
//   IndicaterFunction()
// })

// document.querySelector("#prevButton").addEventListener("click", () => {
//   Indicater[count].classList.remove("active")
//   if(count === 0){
//     count = 4
//   }
//   count--;
//   imageCrousale()
//   IndicaterFunction()
// })

// function imageCrousale() {
//   let img = document.createElement('img')
//   img.src = images[count].url 
//   img.style.width = "100%"
//   captionC.innerText  = images[count].caption
  
//   if (carouselTrack.innerHTML = "img") {
//     carouselTrack.innerHTML = ''
//     carouselTrack.appendChild(img)
//   }
// }



// function IndicaterFunction() {
//   Indicater[count].classList.remove("active")
//   Indicater[count].classList.toggle("active")
// }


// imageCrousale()
// IndicaterFunction()

// autoPlayButton.addEventListener("click", function(){
//   let active = false

//   if (active === false) {
//     setInterval(() => {
//       Indicater[count].classList.remove("active")
//       if (count === 4) {
//          return count = 0
//       }
//       count ++
//       imageCrousale()
//       IndicaterFunction()
//      }, 1000);
//      document.getElementById("timerDisplay").innerText =  `Next slide in s`
//      return active = true
//   }else{
//      active = false
//   }
// })


const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const carouselTrack = document.getElementById("carouselTrack");
const captionC = document.querySelector(".carousel-caption");
const nextButton = document.querySelector("#nextButton");
const prevButton = document.querySelector("#prevButton");
const indicators = document.querySelectorAll(".carousel-indicator");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

let count = 0;
let autoPlayActive = false;
let interval;
let countdown = 5; // AutoPlay countdown


const img = document.createElement("img");
img.style.width = "100%";
carouselTrack.appendChild(img);

nextButton.addEventListener("click", () => changeSlide(1));
prevButton.addEventListener("click", () => changeSlide(-1));

function changeSlide(step) {
  indicators[count].classList.remove("active");
  count = (count + step + images.length) % images.length;
  updateCarousel();
}

function updateCarousel() {
  img.src = images[count].url;
  captionC.innerText = images[count].caption;
  indicators.forEach(indicator => indicator.classList.remove("active"));
  indicators[count].classList.add("active");
}

autoPlayButton.addEventListener("click", function () {
  if (!autoPlayActive) {
    countdown = 5;
    updateCountdown();
    interval = setInterval(() => {
      changeSlide(1);
      countdown = 5;
      updateCountdown();
    }, 5000);
    autoPlayButton.innerText = "Stop AutoPlay";
  } else {
    clearInterval(interval);
    timerDisplay.innerText = ""; // Clear countdown display
    autoPlayButton.innerText = "Start AutoPlay";
  }
  autoPlayActive = !autoPlayActive;
});

function updateCountdown() {
  timerDisplay.innerText = `Next slide in ${countdown}s`;
  let countdownInterval = setInterval(() => {
    countdown--;
    if (countdown <= 0 || !autoPlayActive) {
      clearInterval(countdownInterval);
    } else {
      timerDisplay.innerText = `Next slide in ${countdown}s`;
    }
  }, 1000);
}

updateCarousel();

