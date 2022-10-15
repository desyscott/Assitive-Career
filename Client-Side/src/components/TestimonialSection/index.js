import React from 'react'
import "./index.css"
import Fade from 'react-reveal/Fade';

const Hero=({lightBg,TopLine,lightText,lightTextDesc,headLine,description,img,alt,imgStart,googleImg, appleImg})=> {
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
                     <ul className="Btn-wrapper">
                    <a href="/">
                     Get started
                    </a>
                    
                    </ul>
                    </Fade>
              </div>
            </div>
        
          <div className="InforColumn">
          <div className="img-wrapper">
          {/* <img src={img} alt={alt} className="Img"/> */}
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero