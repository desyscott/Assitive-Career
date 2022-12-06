import React,{useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {fetchCourseRequest} from "../Redux/Reducers/courseReducer/courseActions"
import 'react-loading-skeleton/dist/skeleton.css'
import MessageBox from "../MessageBox/index"
import "./index.css"
import LoadingBox from '../LoadingBox'
import {IoCaretBack} from "react-icons/io5"

const mapState=({coursesData})=>({
  course:coursesData.course,
  loading:coursesData.loading,
  error:coursesData.error
})

const Details=()=> {
  const {course,loading,error}=useSelector(mapState)
  const  dispatch=useDispatch()
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
     <div  className="back-btn">
      <IoCaretBack/> <Link to ="/careers">Back to Careers</Link>
      </div>
         <div className="column center">
          <div className='details-title'>
          <h1>{course.title}</h1>
          <p>Step by step guide to becoming a modern {course.title} in 2022</p>
          </div>
         <div className="details-nav">
            <Link to={`/course/${courseId}`} className="details-btn details">
            Details
            </Link>
            <Link to ={`/roadmap/${courseId}`}  className="details-btn">
            Roadmap
            </Link>
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