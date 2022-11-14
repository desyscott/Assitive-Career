import React,{useState} from 'react'
import Modal from "../../Modal/index"
import "./index.css"
import {MdVerified} from 'react-icons/md'
import ProfilePhoto from "../../Assets/images/blank-profile-picture-gdfa15e9f3_1280.png"



function MentorCard({mentor,request}) {
  
  const [openModal,setOpenModal] = useState(false)
  
  const handleModal=()=>{
    setOpenModal(true)
   
  }
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  
  if(openModal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
    
  return (
    <>
    <div className="mentor-card" key={mentor._id}>

        <div className="profile-photo-wrapper">
        {/* <img src={mentor.profileImage} alt="profile" /> */}
     
        <img src={mentor.profileImage ? mentor.profileImage:ProfilePhoto} alt="profile" className="profile-photo"/>
     
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
       
         <button className="request-link" 
          //  disabled={ request && mentor._id=== request.user}
         onClick={handleModal}>
         <p>Request</p>
         </button>
   
    </div>
    {openModal && <Modal  closeModal={setOpenModal} toggleModal={toggleModal} mentor={mentor} />}
    </>
  )
}

export default  MentorCard
