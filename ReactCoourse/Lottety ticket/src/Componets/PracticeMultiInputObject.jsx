import React, { useState } from 'react'

function PracticeMultiInputObject() {
    const [multiInput, setMultiInput] = useState({
        username:'',
        password:'',
        userId:'',
        mobileNumber:''
    })

    const handleChange = (e) => {
        const value = e.target;
        // console.log("here are the target", e.target);
        
        setMultiInput(() => {
            return {
                ...multiInput,
                [e.target.name]: e.target.value,
                [e.target.password]: e.target.value
            }
        })
    }
    const submmitBtn = (e) => {
        // e.preventDefault();
    }
    // console.log("here is the multiInput", multiInput);
    return (
        
        <>
        <form>
            <label>
                UserName
                <input 
                type="text" 
                name='username'
                value={multiInput.username}
                onChange={handleChange}
                />
            </label>
            <label>
                password
                <input 
                type="text" 
                name='password'
                value={multiInput.password}
                onChange={handleChange}
                />
            </label>
        </form>
            <button  type="submit"onSubmit={submmitBtn}>Submit</button>
        </>
    )
}

export default PracticeMultiInputObject;
