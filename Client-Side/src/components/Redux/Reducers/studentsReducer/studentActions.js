import studentTypes from "./studentTypes"
import Axios from "axios"


export const fetchStudentsRequest=()=>async(dispatch)=>{
    dispatch({
        type:studentTypes.FETCH_STUDENTS_REQUEST
    })
    try{
        const {data} =await Axios.get("/api/auth/students");
        dispatch({
            type:studentTypes.FETCH_STUDENTS_SUCCESS,
            payLoad:data
        })
        
    }catch(error){
        dispatch({
            type:studentTypes.FETCH_STUDENTS_FAIL,
            payLoad:error.message
        })
    }
};


export const fetchStudentRequest =(studentId)=>async(dispatch,getState)=>{
  const {userData:{currentUser}}=getState();
  
    dispatch({
        type:studentTypes.FETCH_STUDENT_REQUEST,
        payLoad:studentId,
    })
    try{
        const {data} = await Axios.get(`/api/auth/${studentId}`,{
          headers:{
            Authorization:`Bearer ${currentUser.token}`
        }
        });
        dispatch({
            type:studentTypes.FETCH_STUDENT_SUCCESS,
            payLoad:data,
        })
     
    }catch(err){
        dispatch({
            type:studentTypes.FETCH_STUDENT_FAIL,
            payLoad:err.response && err.response.data.message
             ? err.response.data.message 
             : err.message,
        })
    }
}


export const deleteStudent = (studentId) => async (dispatch, getState) => {
    dispatch({ type:studentTypes.DELETE_STUDENT_REQUEST, payload:studentId});
    const {userData:{currentUser}}=getState();
    try {
      const { data } = await Axios.delete('/api/auth/' + studentId, {
        headers:{
            Authorization:`Bearer ${currentUser.token}`
        }
      });
      if(data.message){
        dispatch({ type:studentTypes.DELETE_STUDENT_SUCCESS, payload:data.message, success: true });
      } 
      if(data.error){
        dispatch({ type:studentTypes.DELETE_STUDENT_FAIL, payload: data.message });
      }
    } catch (error) {
      dispatch({ type:studentTypes.DELETE_STUDENT_FAIL, payload: error.message });
    }
  };