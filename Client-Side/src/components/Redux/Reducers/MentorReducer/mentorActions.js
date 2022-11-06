import mentorTypes from "./mentorTypes"
import Axios from "axios"


export const fetchMentorsRequest=()=>async(dispatch)=>{
    dispatch({
        type:mentorTypes.FETCH_MENTORS_REQUEST
    })
    try{
        const {data} =await Axios.get("/api/users");
        dispatch({
            type:mentorTypes.FETCH_MENTORS_SUCCESS,
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
            type:mentorTypes.FETCH_MENTOR_SUCCESS,
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


export const verifyMentor=({mentorId,mentorVerified})=>async(dispatch,getState)=>{
    try{ 
    dispatch({
            type:mentorTypes.MENTOR_VERIFICATION_REQUEST,
            payLoad:{mentorId,mentorVerified}
            });
        
    const {userData:{currentUser}}=getState();
    const {data}= await Axios.put("/api/users/" + mentorId,
        mentorVerified,
            {
            headers:{
                Authorization:`Bearer ${currentUser.token}`
            }
        })
        if(data.message){
            dispatch({type:mentorTypes.MENTOR_VERIFICATION_SUCCESS,payLoad:data.message});
  
        }
        if(data.error){
            dispatch({type:mentorTypes.MENTOR_VERIFICATION_FAIL,payLoad:data.error});
           
        }       
    }catch(err){
        dispatch({type:mentorTypes.MENTOR_VERIFICATION_FAIL,
            payLoad:err.response && err.response.data.message
            ?err.response.data.message:err.message}) 
    }
}


export const deleteMentor = (mentorId) => async (dispatch, getState) => {
    dispatch({ type:mentorTypes.DELETE_MENTOR_REQUEST, payload:mentorId});
    const {userData:{currentUser}}=getState();
    try {
      const { data } = await Axios.delete('/api/users/' + mentorId, {
        headers:{
            Authorization:`Bearer ${currentUser.token}`
        }
      });
      if(data.message){
        dispatch({ type:mentorTypes.DELETE_MENTOR_SUCCESS, payload:data.message, success: true });
      } 
      if(data.error){
        dispatch({ type:mentorTypes.DELETE_MENTOR_FAIL, payload: data.message });
      }
    } catch (error) {
      dispatch({ type:mentorTypes.DELETE_MENTOR_FAIL, payload: error.message });
    }
  };