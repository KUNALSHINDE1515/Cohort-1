import React, { useState } from 'react'

function TodoList() {

    const [inputValue, setInputValue] = useState([""]);

    const takeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    return (
      <>
      <h1>TODO LIST</h1>
      <input type="text" 
      value={inputValue}
      onChange={takeInputValue}
      />
      <button>Submit</button>

<ul>

      <li>{inputValue}</li>

</ul>
      </>  
    )
}

export default TodoList
