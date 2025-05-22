import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  let  [counter, setCounter] =  useState(15)

  // let counter = 15

  const addvalue = () => {
    // console.log("clicked",counter);
    
    if (counter < 20) {
      counter = counter + 1
      setCounter(prevCounter => prevCounter +  1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }

    
  }

  const removeValue = () =>{
    if (counter > 0) {
      
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addvalue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
