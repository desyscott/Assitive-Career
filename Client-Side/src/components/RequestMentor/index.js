import React,{useState,useEffect,useRef} from 'react'
import LoadingBox from '../LoadingBox/index'
import "./index.css"

function RequestMentor() {
  const [files,setFiles]=useState("");
  const [course,setCourse]=useState({
    selectCourse:""
  });
  
  
  
  console.log(files)
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
          <label>Select Career</label>
          <select name="selectCourse"><option>Artificial intelligence</option></select>
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
