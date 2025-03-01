/**
 * Write your challenge solution here
 */

const addButton = document.getElementById("addButton");
const taskInput = document.querySelector("#taskInput")
const taskList = document.querySelector("#taskList")
const emptyList = document.querySelector(".empty-list")

const totalTasks = document.querySelector("#totalTasks") 
const completedTasks = document.querySelector("#completedTasks")


const taskArray = []

addButton.addEventListener("click", function(){

    const data = taskInput.value.trim() // remove extra space
    
    if (data === "") {
        alert("Please enter data")
    }else{
        emptyList.style.display = !taskArray.length ? "Block" : "none"
        addtask(data)
        taskInput.value = ""
        taskArray.push({ "desc": data, "completed": false })
        // totalTasks.innerText = `Total task ${taskArray.length}`
        updateTotalTask()
      
    }

})



function addtask(task) {
    const li = document.createElement("li")
    li.className = "task-item"
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.addEventListener("click",completedTasksfn)
    const text = document.createElement("div")
    text.classList.add("task-text")
    text.innerText = task
    const deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-button")
    deletebtn.innerText = "Delete"
    deletebtn.addEventListener("click",deletebtnfn)
    // li.appendChild(checkbox)
    // li.appendChild(text)  
    // li.appendChild(deletebtn)
    li.append(checkbox,text,deletebtn)
    taskList.appendChild(li)
}


function deletebtnfn(e) {
    
    e.target.parentElement.remove()
    for (const task of taskArray) {
        if (task.desc === e.target.previousSibling.innerText) {
            taskArray.splice(taskArray.indexOf(task),1)
            break;
        }
    }
    updateTotalTask()
    emptyList.style.display = !taskArray.length ? "Block" : "none"
}


function completedTasksfn(e) {
    e.target.parentElement.classList.toggle("completed")
    taskArray.forEach((task) => {
        if (task.desc === e.target.nextSibling.textContent) {
            if (task.completed) {
                task.completed = false
            } else {
                task.completed = true
            }


        }
    })
    
    updateTotalTask()
}



function updateTotalTask(){
    // totalTasks.innerText = taskArray.length
    // completedTasks.innerText = taskArray.filter((task) => task.completed === true ).length
    totalTasks.innerText = `Total tasks: ${taskArray.length}`
    completedTasks.innerText = `Completed: ${taskArray.filter(task => task.completed).length}`
}






