import React from 'react'
import "./index.css"

function MentorCard({data}) {
    
    
  return (
    <div className="mentor-card">
        <div className="profile-photo-wrapper">
        <img src={data.profileImage} alt="profile" />
        </div>
        
        <div className="mentor-infor">
        <div>
        <h3 className="mentor-name"> {data.name}</h3>
        </div>
        
          <div className="mentor-profession" >
          <label className="label">professional enterprise</label>
          <p>{data.professional}</p>
          </div>
          
         
          <div>
          <label className="label">Location</label>
          <p>{data.Location}</p>
          </div>
               
          <div>
          <label className="label">department</label>  
          <p>{data.department}</p>
          </div>
       
          <div>
          <label className="label">Mentorship Role</label>
       <p> {data.MentorshipCate}</p>
          </div>
        
          <div>
          <label className="label">hobbies</label>
          <p>{data.Hobbies}</p>
          </div>
        </div>
        <div className="request-link "><p>Request</p></div>
        
    </div>
  )
}

export default  MentorCard
