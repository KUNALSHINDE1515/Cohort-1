import React from 'react'
import syles from "./Signup.module.css"
function SignUp() {
    return (
        <div className={syles.sign_up}>
           <div className={syles.all_container}>
            <h1>Sign In</h1>
            <input type="text" placeholder='Email or  Mobile Number'/>
            <input type="password" placeholder='Password' />
            <button className={syles.btn}>Sign In</button>
            <p>Or</p>
            <button>Use a Sign In Code</button>
            <p>Forgot Password?</p>
         <div>
         <input type="checkbox"/>
             Remeber Me
         </div>
         <div className={syles.heading}>
            New To Netflix?Sign Up Now
         </div>

         <p>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
         </p>
           </div>
        </div>
    )
}

export default SignUp;
