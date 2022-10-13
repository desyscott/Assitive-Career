import React from 'react'
import "./index.css"
import {Link} from "react-router-dom"

export const Button=({scroll,login})=>{
  return (
    <>
    <button className={scroll ? "Btn primary BtnActive":"Btn primary"}>
    <Link to={login ? "/signIn":"user-role"} className="BtnLink">{login ? "Log in":"Sign up"}</Link>  
    </button>
    </>
  )
}


export const SecondaryButton=({GetStarted})=>{
  return (
    <div>
    <button className= "Btn secondary">
    <Link to={GetStarted ? "user-role":""} className="BtnLink_secondary">{GetStarted  ? "Get Started":""}</Link>  
   
    </button>
    </div>
  )
}

