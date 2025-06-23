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

    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let uppecaseAll = () => {
    setTodos((preTodos) =>
      preTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let uppercaseOne = () => {
    setTodos((preTodos) =>
      preTodos.map((todo) => {
        if (todo.id == todo.id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTaskValue}
      ></input>
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
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            <button onClick={() => uppercaseOne(todo.id)}>uppercaseOne</button>
          </li>
        ))}
      </ul>
      <button onClick={uppecaseAll}>UpperCaseAll</button>
    </>
  );
}

export default TodoList;
