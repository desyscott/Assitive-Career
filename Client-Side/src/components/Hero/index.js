import React,{useState} from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./index.css"
import {SecondaryButton} from "../Button/index"
import Fade from 'react-reveal/Fade';



const Hero=({lightBg,TopLine,lightText,lightTextDesc,headLine,description,img,userRatingImg,alt,imgStart})=> {
  const [hover,setHover]=useState(false)
  
  const onHover=()=>{
    setHover(!hover)
  }
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
                 
                     <div className="Btn-wrapper" onMouseEnter={onHover} onMouseLeave={onHover}>
                    
                     <SecondaryButton text="Get Started" hover={hover} onMouseEnter={onHover} onMouseLeave={onHover}/>
                    </div>
              </div>
            </div>
        
          <div className="InforColumn">
          <div className="img-wrapper">
          <Fade>
          <img src={img || <Skeleton/>} alt={alt} className="Img"/>
          </Fade>
          </div>
          </div>
          
         
        </div>
        <div className="ratingImg-wrapper">
        <Fade left>
        <img src={userRatingImg || <Skeleton/>} alt={alt} className="ratingImg"/>
        </Fade>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero