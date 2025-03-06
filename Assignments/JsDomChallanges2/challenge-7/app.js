/**
 * Write your challenge solution here
 */


const button = document.querySelectorAll(".accordion-button")

button.forEach( (data) => {
   data.addEventListener("click", () => {
      document.querySelectorAll(".accordion-item").forEach((e) => {
         e.classList.remove("active")
      })
      data.parentElement.classList.toggle("active")
   })
})

