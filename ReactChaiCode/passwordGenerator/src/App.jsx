import { useState, useCallback , useEffect, useRef } from 'react'
import './App.css'
import React from 'react'
function App() {

  const [length ,setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  // useref Hook
  const PasswordRef = useRef(null)




  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz"

    if (numberAllowed)  str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+[]{}~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed,setPassword])
  

  const copyPasswordTOClipBoard = useCallback(() => {
    PasswordRef.current?.select();
    // PasswordRef.current?setSelectionRange(0,20)
    window.navigator.clipboard.writeText(Password)
  }, [Password])
useEffect(() => {
  passwordGenrator()
}, [length, numberAllowed, charAllowed, setPassword])
  return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 p-1'>
    <h1 className='text-white text-center my-3 '>Password Generator</h1>
    <div className='flex shadow rounded-lg  mb-20 bg-[#fff] text-[#fff]-500'>
      <input  type="text"
      value={Password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={PasswordRef}
      />

      <button 
      onClick={copyPasswordTOClipBoard}
      className='outline-none bg-blue-700 text-white
      px-3 py-0.5 shrink-0'
      >copy</button>
    </div>

    <div className='flex text-sm gap-x2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={ (e) => {setLenght(e.target.value)}}
        />
        <label>length: {length}</label>
      </div>

      <div className='flex item-center gap-x-1'>
        <input type="checkbox"
        className='ml-4'
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={() => {
          setNumberAllowed((prev) => !prev)
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        className='ml-4'
        type="checkbox"
        defaultChecked={charAllowed}
        id='characterInput'
        onChange={() => {
          setCharAllowed( (prev) => !prev)
        }}
         />
 <label  htmlFor="numberInput">Char</label>
      </div>

    </div>
   </div>
   </>
  )
} 

export default App
