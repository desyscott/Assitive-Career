import React,{useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import {fetchMentorRequest} from "../Redux/Reducers/MentorReducer/mentorActions"
import {useDispatch,useSelector} from "react-redux"
import LoadingBox from "../LoadingBox/index"
import MessageBox from "../MessageBox/index"
import {FaFileAlt} from "react-icons/fa"
import {IoCaretBack} from "react-icons/io5"
import "./index.css"





const mapState=({mentorData})=>({
  mentor:mentorData.mentor,
  loading:mentorData.loading,
  error:mentorData.error
})

function Mentor() {
  const {mentor,loading,error}=useSelector(mapState);
    const {mentorId}=useParams();
    const dispatch=useDispatch()
    
 useEffect(()=>{
   dispatch(fetchMentorRequest(mentorId))
 },[dispatch, mentorId])
 
 console.log(mentor)
 
  return (
    <div>
    <div className="back-btn">
    <IoCaretBack/> <Link to="/mentor-list">Back</Link>
    </div>
    
      <div className="form">
      
      <div>
      <h3>Mentor Details</h3>
          </div>
          {loading ? <LoadingBox></LoadingBox> :
         error ? <MessageBox variant="danger">{error}</MessageBox>
         :
         (
  <>
           <div>
            <label htmlFor="FirstName">Mentor's FirstName</label>
            <input 
              type="text"
              id="firstName"
              name="firstName"
              value={mentor.firstName}
             
             
            />
          </div>
          
          <div>
            <label htmlFor="lastName">Mentor's LastName</label>
            <input 
              type="text"
              id="lastName"
              name="lastName"
              value={mentor.lastName}
             
             
            />
          </div>
      <div>
            <label htmlFor="email">Mentor's Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={mentor.email}
             
             
            />
          </div>
        {  
          mentor.CV &&
         <div>
            <label htmlFor="Cv">CV</label>
            <div className="mentor-document">
            <FaFileAlt className="file-icon"/>{mentor.CV}
            </div>
          </div>
     
      
      }
      <div>
            <label htmlFor="profession">Mentor's Profession</label>
            <input 
              type="text"
              id="profession"
              name="profession"
              value={mentor.profession}
             
             
            />
          </div>
          <div>
            <label htmlFor="location">Mentor's Location</label>
            <input 
              type="text"
              id="location"
              name="location"
              value={mentor.Location}
            />
          </div>
          </>
          )}
      </div>
      
    </div>
  )
}

export default Mentor
