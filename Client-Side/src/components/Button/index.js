import React from 'react'
import "./index.css"
import {Link} from "react-router-dom"
import {IoIosArrowForward} from "react-icons/io"
import {HiArrowNarrowRight} from "react-icons/hi"

export const Button=({scroll,login})=>{
  return (
    <>
    <button className={scroll ? "Btn primary BtnActive":"Btn primary"}>
    <Link to={login ? "/signIn":"user-role"} className="BtnLink">{login ? "Log in":"Sign up"}</Link>  
    </button>
    </>
  )
}

export const Button2=({text})=>{
  return (
    <>
    <button  class="btn view-btn">
    <Link to={text ? "user-role":""} class="btn view-btn">{text ? text:""}</Link>  
    </button>
    </>
  )
}


export const SecondaryButton=({hover,text})=>{
 
  return (
    <div>
    <button className= "Btn secondary">
    <Link to={text ? "user-role":""} className="BtnLink_secondary">{text  ? text:""}{hover ?<IoIosArrowForward className="hero-arrow"/>:<HiArrowNarrowRight className="hero-arrow"/>}</Link>  
    </button>
    </div>
  )
}

