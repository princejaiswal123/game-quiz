import React from 'react'
import "./Login.css"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    const [auth,setAuth]=useState("signup")

  
  return (
    <div className="parent-container">
        <div className="inner-container">
            <div className="main-container">
                <h1 className='heading'>QUIZZIE</h1>
                {/* <span className='heading'>QUIZZIE</span> */}
                <div>
                  <div className="btn-container">
                  <button onClick={()=>{setAuth("signup")}} className="auth sign-btn">
                   Sign Up
                   </button>

                   <button onClick={()=>{setAuth("login")}} className="auth login-btn">
                
                   Log In
                   </button>
                  </div>
                  

                  {auth==="signup"&&
                   <div className='outer-form-conatiner '>
                   <div className='form-conatiner'>
                    <div className='input-conainer'>
                        <label htmlFor="" className="label">Name</label>
                        <input type="text" className="input" />
                    </div>
                    <div className='input-conainer'>
                        <label htmlFor="" className="label">Email</label>
                        <input type="text" className="input" />
                    </div>
                    <div className='input-conainer'>
                        <label htmlFor="" className="label">Password</label>
                        <input type="text" className="input" />
                    </div>
                    <div className='input-conainer'>
                        <label htmlFor="" className="label">Confirm Password</label>
                        <input type="text" className="input" />
                    </div>
                   </div>
                  <div className='signbtn-container'>;
                  
                  <button className="subit-btn" >
                  <NavLink to={"/dashboard"}>
                   Sign-Up
                   </NavLink>
                   </button>
                   
                  </div>
                   </div>
                  }
                  {auth==="login"&&
                   <div className='outer-form-conatiner '>
                   <div className='form-conatiner'>
                    {/* <div className='input-conainer'>
                        <label htmlFor="" className="label">Name</label>
                        <input type="text" className="input" />
                    </div> */}
                    <div className='input-conainer'>
                        <label htmlFor="" className="label">Email</label>
                        <input type="text" className="input" />
                    </div>
                    <div className='input-conainer'>
                        <label htmlFor="" className="label">Password</label>
                        <input type="text" className="input" />
                    </div>
                    {/* <div className='input-conainer'>
                        <label htmlFor="" className="label">Confirm Password</label>
                        <input type="text" className="input" />
                    </div> */}
                   </div>
                  <div className='signbtn-container'>
                  <button className="subit-btn">
                  <NavLink to={"/dashboard"}>
                  Log In
                  </NavLink>
                   </button>
                  </div>
                   </div>
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login