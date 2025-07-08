import React from 'react'
import { useState } from 'react'
function MultiInput() {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange = (e) => {
        const value = e.target;
        setFormData(() => {
            return{
                ...formData,
            [e.target.name]: e.target.value           
        }
        })
        
        
        
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
 return(
    <>
    <form>
        <label htmlFor="">Name
            <input type="text"
            value={formData.name}
            name='name'
            onChange={handleChange}
            />
        </label>
        <label htmlFor="">Email
            <input type="text"
            value={formData.email}
            name='email'
            onChange={handleChange}
            />
        </label>
        <label htmlFor="">Password
            <input type="text"
            value={formData.password}
            name='password'
            onChange={handleChange}
            />
        </label>
        <button type='submit' onClick={handleSubmit}> submit</button>
    </form>
    </>
 )
}

export default MultiInput
