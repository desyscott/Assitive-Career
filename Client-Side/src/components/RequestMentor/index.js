import React,{useState,useEffect,useRef} from 'react'
import FormSelect from "../FormSelect/index"
import { configCareers } from '../FormSelect/useSelectForm';
import "./index.css"

function RequestMentor() {
  const [files,setFiles]=useState("");
  
  const [career,setCareer]=useState("");
  
  
  const handleChange=(e)=>{
    const nextFilter = e.target.value
    setCareer(nextFilter)
  
     }
     console.log(career)
 
  const inputRef=useRef()
  useEffect(()=>{
    inputRef.current.focus();

  },[])
  
  
  return (
    <div className="container">
    
   
    <form className="mentorRequest-form ">
    <h1>Request Mentor</h1>
    <div>
            <label htmlFor="email">Email</label>
            <input 
              ref={inputRef}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
            
             
            />
       
          </div>
  
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            
            />
           
          </div>
          <div>
         <FormSelect {...configCareers} handleChange={handleChange}/>
          </div>
          <div>
          <label/>
          <button className="btn btn-primary">submit</button>
          </div>
          </form>
    </div>
  )
}

export default RequestMentor
