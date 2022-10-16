import React,{useState} from 'react'
import {Link} from "react-router-dom"
import "./index.css"


export const UserRoleModal=()=>{
  const Student="Student"
  const Mentor="Mentor"
  return (
    <>
    <div>
      <form className="role-form" >
       <div className="role-header">
       <h2>Sign Up</h2>
       <div>
        <Link to="/signIn" className="close-btn">&times;</Link>
         </div>
       </div>
       
      <div>
        <span className="sub-header">Choose your role !</span>
        </div>
        
        <div className="role-container">
           <Link to={`/signUp/${Mentor}`}>
          <span>Become a Mentor</span>
          </Link>
        </div>
        
        <div className="role-container">
        <Link to={`/signUp/${Student}`}>
         <span>Student</span>
         </Link>
        </div>

       
    
      </form>
    </div>
  </>
  )
}

