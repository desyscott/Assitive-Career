import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {fetchProductsRequest} from "../Redux/Reducers/productReducer/productActions"
import "./index.css"
import Axios from "axios"
import CardSkeleton from '../CardSkeleton'
import CourseCard from "./CourseCard/index"
import MessageBox from "../MessageBox/index"

// const mapState=({productsData})=>({
//   products:productsData.products,
//   loading:productsData.loading,
//   error:productsData.error,
// })
const Courses = () => {
  const [courses,setCourses]=useState([])
 const [loading,setLoading]=useState(false)
 const [error,setError]=useState(null)
  
  
  useEffect(()=>{
    try{
      const fetchData=async()=>{
        setLoading(true)
        const {data}= await Axios.get("/api/courses");
        setLoading(false);
        setCourses(data)
       }
       fetchData()
    }catch(err){
      setError(err.message)
      setLoading(false);
    }
    
  },[])

  return (
    <div className="main">
    {loading ? 
        
        <div className="row center">
        <CardSkeleton cards={12}/>
        </div>
        :
        error ?<MessageBox variant="danger">{error}</MessageBox>
        :(
          <div className="row center">
          <div className="wrap">
          {courses.map(course=>(
            <>
             <CourseCard key={course._id}  course={course}/>
             </>
     )
    )}
    </div>
    </div>
        )}  
    </div>
  )
}

export default Courses;

