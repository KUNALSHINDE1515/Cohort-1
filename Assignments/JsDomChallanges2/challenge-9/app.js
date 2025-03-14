/**
 * Write your challenge solution here
 */

const toggleBtn = document.querySelector(".toggle-btn")
const panelBtn = document.querySelector(".panel")
const closeBtn = document.querySelector(".close-btn")
toggleBtn.addEventListener("click", () => {
    panelBtn.classList.toggle("active")
})

closeBtn.addEventListener("click", () => {
    panelBtn.classList.remove("active")
})