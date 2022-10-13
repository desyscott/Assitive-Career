import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./index.css"
import {SecondaryButton} from "../Button/index"



const Hero=({lightBg,TopLine,lightText,lightTextDesc,headLine,description,img,userRatingImg,alt,imgStart,googleImg, appleImg})=> {
  return (
    <>
    <div className={lightBg ? "landing-container" :"landing-container BgImg"}>
      <div  className="wrapper">
        <div className="InforRow" style={{display: "flex", flexDirection: imgStart==="start" ? "row-reverse":"row"}}>
            <div className="InforColumn">
              <div className="TextWrapper">
                      <div className={lightBg ? "Top-Line":"Top-Line redText "}>{TopLine}</div>
                    <h1 className={lightText ? "heading lightText" : "heading darkText"}>{headLine}</h1>
                     <p className={lightTextDesc? "sub-desc textDesc":"sub-desc darkTextDesc"}> 
                  {description}
                  </p>
                     <ul className="Btn-wrapper">
                     <SecondaryButton GetStarted={true}/>
                    </ul>
              </div>
            </div>
        
          <div className="InforColumn">
          <div className="img-wrapper">
          <img src={img || <Skeleton/>} alt={alt} className="Img"/>
          </div>
          </div>
          
         
        </div>
        <div className="ratingImg-wrapper">
        <img src={userRatingImg || <Skeleton/>} alt={alt} className="ratingImg"/>
        
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero