import courseTypes from "./courseTypes"
import Axios from "axios"


export const fetchCoursesRequest=()=>async(dispatch)=>{
    dispatch({
        type:courseTypes.FETCH_COURSES_REQUEST
    })
    try{
        const {data} =await Axios.get("/api/courses");
        dispatch({
            type:courseTypes.SET_COURSES,
            payLoad:data
        })
        
    }catch(error){
        dispatch({
            type:courseTypes.FETCH_COURSES_FAIL,
            payLoad:error.message
        })
    }
};


export const fetchCourseRequest =(courseId)=>async(dispatch)=>{
    dispatch({
        type:courseTypes.FETCH_COURSE_REQUEST,
        payLoad:courseId,
    })
    try{
        const {data} = await Axios.get(`/api/courses/${courseId}`);
        dispatch({
            type:courseTypes.SET_COURSE,
            payLoad:data,
        })
     
    }catch(err){
        dispatch({
            type:courseTypes.FETCH_COURSE_FAIL,
            payLoad:err.response && err.response.data.message
             ? err.response.data.message 
             : err.message,
        })
    }
}