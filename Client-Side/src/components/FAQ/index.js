import React from 'react'
import "./index.css"
import FAQList from "./FAQList"
import {FAQData} from "./FAQData"


const FAQ=({lightBg,TopLine,lightText,lightTextDesc,headLine,description,img,alt,imgStart})=> {
    
   
                                                                                               
  return (
    <div className={lightBg ? "faq-container" :"faq-container grayBg"}>
       <h1>Frequently Asked Questions</h1>
      <div>
     {FAQData.map((item,index)=>{
         return(
             <FAQList item={item} key={index}/>
         )
     })}
      </div>
    </div>
  )
}

export default FAQ
