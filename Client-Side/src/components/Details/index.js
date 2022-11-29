import React,{useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {fetchCourseRequest} from "../Redux/Reducers/courseReducer/courseActions"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import MessageBox from "../MessageBox/index"
import "./index.css"
import LoadingBox from '../LoadingBox'


const mapState=({coursesData})=>({
  course:coursesData.course,
  loading:coursesData.loading,
  error:coursesData.error
})

const Details=()=> {

  const {course,loading,error} =useSelector(mapState)
  const dispatch =useDispatch()
 
  
   const {courseId}=useParams()
  
  useEffect(()=>{
    dispatch(fetchCourseRequest(courseId))
  },[dispatch,courseId])
  
 
  
  
   
   if(!course){
     return <div>No course found</div>
   }
   
   
  
   
  return (
    
    <div className="main">
    {loading ? 
     <LoadingBox/>
     :
     error ?<MessageBox variant="danger">{error}</MessageBox>
     :
    ( <>
       <Link to ="/careers">Back to Results</Link>
         <div className="column center">
         <div className="details-nav">
         <div  className="details-btn">
         <Link to={`/course/${courseId}`}>Details</Link>
         </div>
         <div className="details-btn">
         <Link to ={`/roadmap/${courseId}`}>Roadmap</Link>
         </div>
         </div>
         
         <div className="details-modal">
          <p>{course.details}</p>
           
         </div>
      </div>
      </>)
    }
 </div>
 
  )
}

export default Details