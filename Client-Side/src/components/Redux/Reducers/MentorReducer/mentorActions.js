import mentorTypes from "./mentorTypes"
import Axios from "axios"


export const fetchMentorsRequest=()=>async(dispatch)=>{
    dispatch({
        type:mentorTypes.FETCH_MENTORS_REQUEST
    })
    try{
        const {data} =await Axios.get("/api/users");
        dispatch({
            type:mentorTypes.SET_MENTORS,
            payLoad:data
        })
        
    }catch(error){
        dispatch({
            type:mentorTypes.FETCH_MENTORS_FAIL,
            payLoad:error.message
        })
    }
};


export const fetchMentorRequest =(mentorId)=>async(dispatch)=>{
    dispatch({
        type:mentorTypes.FETCH_MENTOR_REQUEST,
        payLoad:mentorId,
    })
    try{
        const {data} = await Axios.get(`/api/users/${mentorId}`);
        dispatch({
            type:mentorTypes.SET_MENTOR,
            payLoad:data,
        })
     
    }catch(err){
        dispatch({
            type:mentorTypes.FETCH_MENTOR_FAIL,
            payLoad:err.response && err.response.data.message
             ? err.response.data.message 
             : err.message,
        })
    }
}