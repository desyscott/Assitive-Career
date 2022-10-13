import React from 'react'
import "./index.css"

const MentorSection=({lightBg,TopLine,lightText,lightTextDesc,headLine,description,img,alt,imgStart,heading})=> {
  return (
    <>
    <div className={lightBg ? "mentor-container" :"mentor-container purpleBg"}>
      <div  className="wrapper">
        <div className="InforRow" style={{display: "flex", flexDirection: imgStart==="start" ? "row-reverse":"row"}}>
            <div className="InforColumn">
              <div className="TextWrapper">
                      <div className={lightBg ? "Top-Line":"Top-Line redText "}>{TopLine}</div>
                    <img src={heading} alt="" className="heading-image"/>
                     <p className={lightTextDesc? "sub-desc textDesc":"sub-desc darkTextDesc"}> 
                  {description}
                  </p>
                     <ul className="Btn-wrapper">
                    <a href="/">
                    Read More
                    </a>
                    
                    </ul>
              </div>
            </div>
            
        
          <div className="InforColumn">
          <div className="img-wrapper">
          <img src={img} alt={alt} className="mentor-Img"/>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MentorSection