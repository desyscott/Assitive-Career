import React,{useState} from 'react'
import Modal from "../../Modal/index"
import "./index.css"

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
        <h3 className="mentor-name"> {mentor.name}</h3>
        </div>
        
          <div className="mentor-profession" >
          <label className="label">professional enterprise</label>
          <p>{mentor.professional}</p>
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
       <p> {mentor.MentorshipCate}</p>
          </div>
        
          <div>
          <label className="label">hobbies</label>
          <p>{mentor.Hobbies}</p>
          </div>
        </div>
        <div className="request-link " onClick={handleModal}><p>Request</p></div>
       
    </div>
  )
}

export default  MentorCard
