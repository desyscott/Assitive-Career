import React from 'react'
import {productsData} from "./data/index"
import "./index.css"
import HorizontalScroll from "react-scroll-horizontal"


const Hero=({lightBg,TopLine,lightText,lightTextDesc,headLine,description,img,alt,imgStart,})=> {
  return (
    <>
    <div className={lightBg ? "main-container" :"main-container eventBgImg"}>
    <div className="event-header">Events</div>
    <div className="event-subheader">
    <h3>Upcoming event with your favorite mentor</h3>
    <button class="btn view-btn">View all events</button>
    </div>
    <div className="event-wrapper">
   
                {productsData.map((product,index)=>{
                    return(
                  
                    <div key={index} className="event-card">
                        <img src={product.img} alt={product.alt} className="event-image"/>
                        <div className="event-infor">
                      <h3 className="event-title">{product.title}</h3>
                      {/* <p>{product.desc}</p> */}
                        </div>
                    </div>
                  
                )})}
            </div>
    </div>
    </>
  )
}

export default Hero