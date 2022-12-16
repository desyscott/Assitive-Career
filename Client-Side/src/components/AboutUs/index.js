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
      <div>
   Assistive Career provide students with career advice, a roadmap of the skills they would need to learn and the resources needed to learn those skills. 
   The suggested system would also connect students with mentors who are presently engaged in the IT industry in the event that they want advice or career counseling as they begin on their adventures.
    The platform allows them to explore all of the possible tech fields they are interested in, as well as tech skills that are more relevant in the tech industry today with real time updates using the data mining tool called selenium.
   Individuals accessing the platform will not only have access to current tech skills and career trends, but also they will have career roadmaps along with learning resources, and the opportunity to mentor or request a mentor who is/has worked in any of the tech fields they need guidance on.

      </div>
      </div> 
      </Fade>
      </div>
      <Fade bottom>
      <div className="about-steps">
      <div className="steps">
      <h3>Unique Connections</h3>
      Create connections that can change the course of your career.Connect with people from companies and topics most relevant to you.
      Our mentorship service will help you request a mentor so you can arrange a 1:1 meeting via video or audio with them
        </div>
      <div className="steps">
      <h3>Choose Right</h3>
      We help you make the right choice and push you towards your career goals by engaging in our events and career test to discover your strengths and future opportunities
        </div>
      <div className="steps">
      <h3>Master Change</h3>
      Discover the soft and industry skills you need to master change and find your way to a more successful and sustainable career in technology.
        </div>
        </div>
        </Fade>
    </div>
    </>
  )
}

export default About