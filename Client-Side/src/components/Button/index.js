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


export const SecondaryButton=({text})=>{
  return (
    <div>
    <button className= "Btn secondary">
    <Link to={text ? "user-role":""} className="BtnLink_secondary">{text  ? text:""}</Link>  
   
    </button>
    </div>
  )
}

