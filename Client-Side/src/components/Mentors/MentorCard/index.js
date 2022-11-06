import React,{useState} from 'react'
import Modal from "../../Modal/index"
import "./index.css"
import {MdVerified} from 'react-icons/md'



function MentorCard({mentor}) {
  
  const [openModal,setOpenModal] = useState(false)
  
  const handleModal=()=>{
    setOpenModal(true)
   
  }
  
    if(openModal) {
   return <Modal closeModal={setOpenModal} mentor={mentor} /> 
  }
    
  return (
    <div className="mentor-card" key={mentor._id}>

        <div className="profile-photo-wrapper">
        <img src={mentor.profileImage} alt="profile" />
        
        </div>
        
        <div className="mentor-infor">
        <div>
        <h3 className="mentor-name"> {mentor.firstName}{" "}{mentor.lastName}
      { mentor.mentorVerified && <span> <MdVerified className="verified-icon"/></span>}
        </h3>
       
        
        </div>
        
          <div className="mentor-profession" >
          <label className="label">profession</label>
          <p>{mentor.profession}</p>
          </div>
          
         
          <div>
          <label className="label">Location</label>
          <p>{mentor.Location}</p>
          </div>
               
          <div>
          <label className="label">Career</label>  
          <p>{mentor.career}</p>
          </div>
       
          <div>
          <label className="label">Mentorship Role</label>
       <p> {mentor.MentorshipRole}</p>
          </div>
        
          <div>
          <label className="label">hobbies</label>
          <p>{mentor.Hobbies}</p>
          </div>
        </div>
       
         <button className="request-link" onClick={handleModal}><p>Request</p></button>
         
         
        
       
    </div>
  )
}

export default  MentorCard
