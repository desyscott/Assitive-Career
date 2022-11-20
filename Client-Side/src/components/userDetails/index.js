import React,{useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import {fetchStudentRequest} from "../Redux/Reducers/studentsReducer/studentActions"
import {useDispatch,useSelector} from "react-redux"
import LoadingBox from "../LoadingBox/index"
import MessageBox from "../MessageBox/index"
import {FaFileAlt} from "react-icons/fa"
import {IoCaretBack} from "react-icons/io5"
import "./index.css"





const mapState=({studentData})=>({
  student:studentData.student,
  loading:studentData.loading,
  error:studentData.error
})

function User() {
  const {student,loading,error}=useSelector(mapState);
    const {userId}=useParams();
    const dispatch=useDispatch()
    
 useEffect(()=>{
   dispatch(fetchStudentRequest(userId))
 },[dispatch, userId])
 

console.log(userId)
 
  return (
    <div>
    <div className="back-btn">
    <IoCaretBack/> <Link to="/users">Back</Link>
    </div>
    
      <div className="form">
      
      <div>
      <h3>Student Details</h3>
          </div>
          {loading ? <LoadingBox></LoadingBox> :
         error ? <MessageBox variant="danger">{error}</MessageBox>
         :
         (
  <>
           <div>
            <label htmlFor="FirstName">Student's FirstName</label>
            <input 
              type="text"
              id="firstName"
              name="firstName"
              value={student.firstName}
             
             
            />
          </div>
          
          <div>
            <label htmlFor="lastName">Student's LastName</label>
            <input 
              type="text"
              id="lastName"
              name="lastName"
              value={student.lastName}
             
             
            />
          </div>
      <div>
            <label htmlFor="email">Student's Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={student.email}
             
             
            />
          </div>
          <div>
            <label htmlFor="Cv">CV</label>
            <div className="student-document">
            <FaFileAlt className="file-icon"/>{student.CV}
            </div>
          </div>
    
          </>
          )}
      </div>
      
    </div>
  )
}

export default User
