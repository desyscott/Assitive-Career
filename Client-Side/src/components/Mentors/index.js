import React from 'react'
import "./index.css"
import {data} from "./data"
import MentorCard from "./MentorCard/index"



function Mentors() {
    
  return (
      <div className="row top">
    <div className="col-2">
    <div className="mentor-grid">
    {data.users.map((data,index)=>(
       <MentorCard key={index} data={data}/>
    ))}
    </div>
    </div>
    <div className="col-1">
    Sent request
    </div>
    </div>
  )
}

export default Mentors