import React,{useEffect} from 'react'
// import MessageBox from "../MessageBox/index"
import {useParams,Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import "./index.css"
// import LoadingBox from '../LoadingBox/index'
import {fetchCourseRequest} from "../Redux/Reducers/courseReducer/courseActions"
import {IoCaretBack} from "react-icons/io5"
import BasicFlow from "../BasicFlow/index"


const mapState=({coursesData})=>({
  course:coursesData.course,
  loading:coursesData.loading,
  error:coursesData.error
})

const data=[
  {
    id:"1",
  label:"node",
},
  {
    id:"2",
  label:"node1",
},
  {
    id:"3",
  label:"node2",
},
  {
    id:"4",
  label:"node3",
},
  {
    id:"5",
  label:"node4s",
},
  {
    id:"6",
  label:"node",
},
  ]

const Roadmap=()=>{
  const dispatch=useDispatch()
  const {courseId}=useParams()
  const {course} =useSelector(mapState)
  
  useEffect(()=>{
    dispatch(fetchCourseRequest(courseId))
  },[dispatch,courseId])
  
  return (
    <div className="main">
      <div  className="back-btn">
      <IoCaretBack/> <Link to ="/careers">Back to Careers</Link>
      </div>
     
         <div className="column center">
         <div className='details-title'>
         <h1>{course.title}</h1>
         <p>Step by step guide to becoming a modern {course.title} in 2022</p>
         </div>
        
         <div className="details-nav">
          <Link to={`/course/${courseId}`} className="details-btn">
          Details
          </Link>
          <Link to ={`/roadmap/${courseId}`}  className="details-btn details">
          Roadmap
          </Link>
         </div>
         <div className="details-modal">
         <div>
           <strong>{course.title}</strong>
          </div>
            <BasicFlow data={data} />
         </div>
      </div>
      
 </div>
 
  )
}

export default Roadmap;