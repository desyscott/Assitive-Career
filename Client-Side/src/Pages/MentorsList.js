import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {fetchMentorsRequest} from "../components/Redux/Reducers/MentorReducer/mentorActions"



const mapState=({mentorData})=>({
  mentors:mentorData.mentors,
  loading:mentorData.loading,
  error:mentorData.error,
})

function MentorsList() {
  const {mentors,loading,error} =useSelector(mapState)
  const dispatch=useDispatch()
  
  
  useEffect(()=>{
    dispatch(fetchMentorsRequest())
   },[dispatch])
  
  return (
    <div className="content content-margined">

      <div className="mentors-header">
        <h3>Mentors</h3>
      </div>
      <div className="order-list">

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>FIRSTNAME</th>
              <th>LASTNAME</th>
              <th>ROLE</th>
              <th>ISVERIFIED</th>
              <th>EMAIL</th>
              <th>PROFESSION</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
          {mentors.map(mentor=>(
              
              <tr key={mentor._id}>
              <td>{mentor._id}</td>
              <td>createdAt</td>
              <td>{mentor.name}</td>
              <td>name</td>
              <td>{mentor.role}</td>
              <td>true</td>
              <td>{mentor.email}</td>
              <td>{mentor.professional}</td> 
              <td>
                <Link to="" className="button secondary" >Details</Link>
                {' '}
                <button type="button"  className="button secondary">Verify</button>
                {' '}
                <button type="button"  className="button secondary">Delete</button>
              </td>
            </tr>
             ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default MentorsList
