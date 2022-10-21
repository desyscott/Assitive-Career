import React,{useState} from 'react'
import "./index.css"


function Test() {
    const [quiz,setQuiz]=useState({
        cyberSecurity:"",
    })
    
    const handleChange=()=>{
        
        
    }
  return (
    <div>
    <form className="form">
    <div>
    <label>Data Analysis</label>
    <select name="cyberSecurity" onChange={handleChange}>
    <option value="10">40</option>
    <option value="20">20</option>
    <option value="50">50</option>
    <option value="30">30</option>
    </select>
    </div>
    <div>
    <label>Cyber security</label>
    <select name="cyberSecurity" onChange={handleChange}>
    <option value="10">90</option>
    <option value="20">20</option>
    <option value="50">50</option>
    <option value="30">30</option>
    </select>
    </div>
    <div>
    <label>Data science</label>
    <select name="cyberSecurity" onChange={handleChange}>
    <option value="10">70</option>
    <option value="20">20</option>
    <option value="50">50</option>
    <option value="30">30</option>
    </select>
    </div>
    <div>
    <label>Artificial intelligence</label>
    <select name="cyberSecurity" onChange={handleChange}>
    <option value="10">100</option>
    <option value="20">20</option>
    <option value="50">50</option>
    <option value="30">30</option>
    </select>
    </div>
    <div>
    <label>backend engineer</label>
    <select name="cyberSecurity" onChange={handleChange}>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="50">50</option>
    <option value="30">30</option>
    </select>
    </div>
    <div>
    <label>frontend engineer</label>
    <select name="cyberSecurity" onChange={handleChange}>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="50">50</option>
    <option value="30">30</option>
    </select>
    </div>
    </form>
    </div>
  )
}

export default Test