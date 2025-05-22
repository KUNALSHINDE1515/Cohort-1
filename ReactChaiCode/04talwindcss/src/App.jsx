import React from 'react'
import './App.css'
import Card from './componets/Card'

function App() {

  let myObj = {
    username: "Kunal",
    age: 22
  }

  let newArray = [1,2,3]
  return (
  <>
  <h1 className="bg-green-400 text-black p10 rounded-xl">Talwind test</h1>
      <Card username= "chai aur code "  btnText="click me"/>
      <Card username= "Hitesh Choudhary" btnText="visit me"/>
  </>
  )
}

export default App
