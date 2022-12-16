import React,{useState} from 'react'
import "./index.css"
import {IoIosArrowForward} from "react-icons/io"
import {BiChevronDown}  from "react-icons/bi"


const  FAQList=({item})=>{
    const [subinfor,setSubinfor]=useState(false);
    const showSubInfor=()=>setSubinfor(!subinfor);
  return (
    <div>
    
        <div className='faq-box' onClick={item.subInfor && showSubInfor}>
        <div className='faq-title'>
      <strong>{item.title}</strong>
    {item.subInfor && subinfor
      ?<BiChevronDown size={21}/>
      :item.subInfor
      ?<IoIosArrowForward/>
      :null}
      </div>
     <div>
      {
      subinfor && item.subInfor.map((item,index)=>(
          <p className="faq-details" key={index}>{item.detail}</p>
      ))
      }
      </div>
      </div>
    
      
  
    </div>
  )
}

export default FAQList