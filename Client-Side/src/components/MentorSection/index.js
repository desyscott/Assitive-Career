import React from 'react'
import "./index.css"
import Fade from 'react-reveal/Fade';
import {SecondaryButton} from "../Button/index"

const MentorSection=({lightBg,TopLine,lightText,lightTextDesc,headLine,description,img,alt,imgStart,heading})=> {
  return (
    <>
    <div className={lightBg ? "mentor-container" :"mentor-container purpleBg"}>
      <div  className="wrapper">
        <div className="InforRow" style={{display: "flex", flexDirection: imgStart==="start" ? "row-reverse":"row"}}>
            <div className="InforColumn">
              <div className="TextWrapper">
              <Fade right>
                      <div className={lightBg ? "Top-Line":"Top-Line redText "}>{TopLine}</div>
                    <img src={heading} alt="" className="heading-image"/>
                     <p className={lightTextDesc? "sub-desc textDesc":"sub-desc darkTextDesc"}> 
                  {description}
                  </p>
                     <ul className="Btn-wrapper">
                    <ul className="Btn-wrapper">
                     <SecondaryButton GetStarted={true} text="Read More"/>
                    </ul>
                    </ul>
                    </Fade>
              </div>
            </div>
            
        
          <div className="InforColumn">
          <div className="img-wrapper">
          <Fade left>
          <img src={img} alt={alt} className="mentor-Img"/>
          </Fade>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MentorSection