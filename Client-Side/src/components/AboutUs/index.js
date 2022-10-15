import React from 'react'
import "./index.css"
import Fade from 'react-reveal/Fade';

const About=({lightBg,TopLine,lightText,lightTextDesc,headLine,description,img,alt,imgStart,googleImg, appleImg})=> {
  return (
    <>
    <div className={lightBg ? "aboutUs-container" :"aboutUs-container purpleBg"}>
      <div  className="about-wrapper">
      <Fade bottom>
      <div className="about-card">
            <h2 className={lightText ? "heading lightText" : "heading darkText"}>
          {headLine}
        </h2>
      
      </div> 
      </Fade>
      </div>
      <Fade bottom>
      <div className="about-steps">
      <div className="steps">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate quisquam vel, itaque tenetur pariatur laboriosam quia sint neque adipisci eaque labore, repellendus sunt dicta necessitatibus nihil esse explicabo! Quod.
        </div>
      <div className="steps">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate quisquam vel, itaque tenetur pariatur laboriosam quia sint neque adipisci eaque labore, repellendus sunt dicta necessitatibus nihil esse explicabo! Quod.
        </div>
      <div className="steps">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate quisquam vel, itaque tenetur pariatur laboriosam quia sint neque adipisci eaque labore, repellendus sunt dicta necessitatibus nihil esse explicabo! Quod.
        </div>
        </div>
        </Fade>
    </div>
    </>
  )
}

export default About