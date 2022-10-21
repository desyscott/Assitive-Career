import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {fetchCoursesRequest} from "../Redux/Reducers/courseReducer/courseActions"
import "./index.css"
import CardSkeleton from '../CardSkeleton'
import CourseCard from "./CourseCard/index"
import MessageBox from "../MessageBox/index"
import { GoSearch} from "react-icons/go";

const mapState=({coursesData})=>({
  courses:coursesData.courses,
  loading:coursesData.loading,
  error:coursesData.error,
})
const Courses = () => {
  const {courses,loading,error} =useSelector(mapState)
 const [query,setQuery]=useState("")
 
 const dispatch=useDispatch()

  
 useEffect(()=>{
  dispatch(fetchCoursesRequest())
 },[dispatch])
  
  console.log(courses)
 
  return (
    <div className="main">
     
    {loading ? 
        
        <div className="row center">
        <CardSkeleton cards={12}/>
        </div>
        :
        error ?<MessageBox variant="danger">{error}</MessageBox>
        :(
          <>
          <div className="search_bar">
       <input placeholder="Search" onChange={(e)=>setQuery(e.target.value)}/> 
      {!query && <GoSearch size={15}  className="search-icon"/>}
       </div>
          <div className="row center">
        
          <div className="wrap">
          {courses.filter((course)=>course.title.toLowerCase().includes(query)).map(course=>(
            <div key={course.id}>
             <CourseCard key={course._id} course={course}/>
             </div>
     )
    )}
    </div>
    </div>
    </>
        )}  
    </div>
  )
}

export default Courses;

