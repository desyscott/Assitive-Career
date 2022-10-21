import requestTypes from "./requestTypes";
import Axios from "axios"


export const addRequestItem=(mentorId)=>async(dispatch,getState)=>{
    
    try{
        const {data} = await Axios.get(`/api/users/${mentorId}`);
        dispatch({
       type:requestTypes.ADD_TO_REQUEST,
       payLoad:{
           name:data.name,
           profileImage:data.profileImage,
           email:data.email,
           Location:data.Location,
           career:data.career,
           MentorshipCate:data.MentorshipCate,
           role:data.role,
           Hobbies:data.Hobbies,
           professional:data.professional,
           user:data._id,
       }
       });
        
    //adding the requestItems to local storage
   localStorage.setItem("requestItems",JSON.stringify(getState().requestData.requestItems));
  
    }catch(error){
      console.log(error)  
    }   
}


export const removeRequestItem=(mentorId)=>async(dispatch,getState)=>{
    dispatch({
        type:requestTypes.REMOVE_REQUEST_ITEM,
        payLoad:mentorId
         });
    console.log(mentorId);
    
    //updating the local storage 
    localStorage.setItem("requestItems", JSON.stringify(getState().requestData.requestItems));
}

