import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  let [todos, setTodos] = useState([
    {
      task: "sample-task",
      id: uuidv4(),
    },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((preTodos) => {
      return [...preTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTaskValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    console.log("Task ID :", id);
   
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id))
    

  }
  return (
    <>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTaskValue}
      >
      </input>
      <br></br>
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>
      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => (deleteTodo(todo.id))}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
