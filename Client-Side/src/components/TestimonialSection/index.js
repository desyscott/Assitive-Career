import React,{useState} from 'react'
import "./index.css"
import Fade from 'react-reveal/Fade';
import {SecondaryButton} from "../Button/index"


const Hero=({lightBg,TopLine,lightText,lightTextDesc,headLine,description,img,alt,imgStart,googleImg, appleImg})=> {
  const [hover,setHover]=useState(false)
  
  const onHover=()=>{
    setHover(!hover)
  }
  
  
  return (
    <>
    <div className={lightBg ? "testimony-container" :"testimony-container purpleBg"}>
      <div  className="wrapper">
        <div className="InforRow" style={{display: "flex", flexDirection: imgStart==="start" ? "row-reverse":"row"}}>
            <div className="InforColumn">
              <div className="TextWrapper">
              <Fade left>
                      <div className={lightBg ? "Top-Line":"Top-Line redText "}>{TopLine}</div>
                    <h1 className={lightText ? "heading lightText" : "heading darkText"}>{headLine}</h1>
                     <p className={lightTextDesc? "sub-desc textDesc":"sub-desc darkTextDesc"}> 
                  {description}
                  </p>
                  <div className="Btn-wrapper" onMouseEnter={onHover} onMouseLeave={onHover}>
                    
                    <SecondaryButton text="Get Started" hover={hover} onMouseEnter={onHover} onMouseLeave={onHover}/>
                   </div>
                    </Fade>
              </div>
            </div>
        
          <div className="InforColumn">
          <div className="img-wrapper">
          <Fade right>
          <img src={img} alt={alt} className="Img"/>
          </Fade>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero