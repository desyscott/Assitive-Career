import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {fetchMentorsRequest} from "../Redux/Reducers/MentorReducer/mentorActions"
import "./index.css"
import MentorCard from "./MentorCard/index"
import MessageBox from "../MessageBox/index"
import LoadingBox from '../LoadingBox/index'


const mapState=({mentorData,requestData})=>({
  mentors:mentorData.mentors,
  loading:mentorData.loading,
  error:mentorData.error,
  requestItems:requestData.requestItems
})

function Mentors() {
  const {mentors,requestItems,loading,error} =useSelector(mapState)
  const dispatch=useDispatch()
  const [query,setQuery] = useState("")
  
  useEffect(()=>{
    dispatch(fetchMentorsRequest())
   },[dispatch])
  
  console.log(query)
  
 
  

  return (
    <>  
      <div className="row top">   
      {loading ? 
        <LoadingBox></LoadingBox>
        :
        error ?<MessageBox variant="danger">{error}</MessageBox>
        :
  
    (
      <>
      <div className="col-2">
      <strong>List to Request</strong>
      <div className="selectbox-container">
      <select className="mentor-selectbox" onChange={(e)=>setQuery(e.target.value)}>
      
      {mentors.map((mentor)=>(
        <option key={mentor._id}>
     {mentor.professional}
     </option>
      ))}
     
      </select>
      </div>
    <div className="mentor-grid">
    {mentors.filter((mentor)=>mentor.professional.toLowerCase().includes(query)).map((mentor)=>(
       <div>
       <MentorCard key={mentor._id} mentor={mentor} />
       </div>
    ))}
    </div>
    
    </div>
    <div className="col-1">
    <p>Sent request</p>
    <div className="request-card card-1">
    <p>You can send max 4 requests at a time</p>
    </div>
     <ul >
     {requestItems.splice(4, 1) && requestItems.map(request=>(
       <li key={request.user} className="request-card card-2 flex ">
        <img src={request.profileImage} alt="profile" />
        <div>
       <span className="request-name">{request.name}</span>
       </div>
         <p>Requested</p>
       </li>
     ))}
     </ul>
    </div>
    </>)
      }
    </div>
    </>
  )
}

export default Mentors