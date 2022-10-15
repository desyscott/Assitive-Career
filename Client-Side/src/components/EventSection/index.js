import React from 'react'
import {productsData} from "./data/index"
import "./index.css"
import {horizontalScrollbar} from "react-scroll-horizontal"

const Hero=({lightBg,TopLine,lightText,lightTextDesc,headLine,description,img,alt,imgStart,googleImg, appleImg})=> {
  return (
    <>
    <div className={lightBg ? "main-container" :"main-container eventBgImg"}>
    <div style={{display: "flex" ,padding:"0 5rem",marginBottom:"3rem"}}>Events</div>
    <div style={{display: "flex", justifyContent: "space-between",padding:"0 5rem" ,marginBottom:"2rem"}}>
    <h3>Upcoming event with your favorite mentor</h3>
    <button class="btn view-btn">View all events</button>
    </div>
    <div className="event-wrapper">
   
                {productsData.map((product,index)=>{
                    return(
                      
                    <div key={index} className="event-card">
                        <img src={product.img} alt={product.alt} className="event-image"/>
                        <div className="event-infor">
                      <h2>{product.name}</h2>
                      <p>{product.desc}</p>
                        </div>
                    </div>
                )})}
            </div>
    </div>
    </>
  )
}

export default Hero