import React from 'react'
import {productsData} from "./data/index"
import "./index.css"

const Hero=({lightBg,TopLine,lightText,lightTextDesc,headLine,description,img,alt,imgStart,googleImg, appleImg})=> {
  return (
    <>
    <div className={lightBg ? "main-container" :"main-container eventBgImg"}>
    <div style={{display: "flex"}}>Events</div>
    <div style={{display: "flex"}}>
    <h3>Upcoming event with your favorite mentor</h3>
    <button>View</button>
    </div>
    <div className="event-wrapper">
   
                {productsData.map((product,index)=>{
                    return(
                    <div key={index} className="event-card">
                        <img src={product.img} alt={product.alt} className="event-image"/>
                        <div className="event-infor">
                      <h2>{product.name}</h2>
                      <p>{product.desc}</p>
                      <p>{product.price}</p>
                      <button>{product.button}</button>
                        </div>
                    </div>
                )})}
            </div>
    </div>
    </>
  )
}

export default Hero