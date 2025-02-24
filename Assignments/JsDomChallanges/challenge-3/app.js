/**
 * Write your challenge solution here
 */
const input = document.querySelector("#nameInput")
const showName = document.querySelector("#nameDisplay")

input.addEventListener("input", (event) => {
    // console.clear()
    showName.innerHTML = event.target.value
})


const ageInput = document.querySelector("#ageInput")
const bioInput = document.querySelector("#bioInput")
const jobInput = document.querySelector("#jobInput")

const jobDisplay = document.querySelector("#jobDisplay")
const ageDisplay = document.querySelector("#ageDisplay")
const bioDisplay = document.querySelector("#bioDisplay")


ageInput.addEventListener("input", (e) => {
    ageDisplay.innerHTML = e.target.value
})

bioInput.addEventListener("input", (event) => {
    bioDisplay.innerHTML = event.target .value
})

jobInput.addEventListener("click", (event) => {
    jobDisplay.innerHTML = event.target.value
})