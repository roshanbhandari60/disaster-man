import React, { useState } from 'react'
import './SignUp.css'
import Navbar from '../navbar/Navbar'
import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'

const Login = () => {
    const [action,setAction] = useState("Sign Up");
  return (
    <>
    <Navbar/>
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:
                <div className="input">
                <img src={user_icon} alt="Image not found" />
                <input type="text" placeholder='Name'/>
                </div>
            }
            
            <div className="input">
                <img src={email_icon} alt="Image not found" />
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="Image not found" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className="submitContainer">
            <div className={action==="Login"?"submitBtn gray":"submitBtn"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submitBtn gray":"submitBtn"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
    </>
  )
}

export default Login