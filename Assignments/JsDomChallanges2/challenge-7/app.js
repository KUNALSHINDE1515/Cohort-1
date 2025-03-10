/**
 * Write your challenge solution here
 */


// const button = document.querySelectorAll(".accordion-button")

// button.forEach( (data) => {
//    data.addEventListener("click", () => {
//       document.querySelectorAll(".accordion-item").forEach((e) => {
//          e.classList.remove("active")
//       })
//       data.parentElement.classList.toggle("active")
//    })
// })

const buttons = document.querySelectorAll(".accordion-button");

buttons.forEach((button) => {
   button.addEventListener("click", () => {
      const item = button.parentElement;
      const isActive = item.classList.contains("active");

      // Remove 'active' from all items
      document.querySelectorAll(".accordion-item").forEach((e) => e.classList.remove("active"));

      // Toggle the clicked one (if it was not active before)
      if (!isActive) {
         item.classList.add("active");
      }
   });
});
