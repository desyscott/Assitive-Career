import {userTypes} from "./userTypes"
import Axios from "axios"

export const signIn=(email,password) =>async(dispatch)=>{
    dispatch({
        type:userTypes.USER_SIGNIN_REQUEST,
        payLoad:{email,password}
    })
    
    try{
        const {data} =await Axios.post("/api/auth/signin",{email,password});
        console.log("signInData",data);
       
           if(data.id){
            dispatch({
                type:userTypes.USER_SIGNIN_SUCCESS,
                payLoad:data})
           } 
           
           if(data.errors){
            dispatch({
                type:userTypes.USER_SIGNIN_ERROR,
                payLoad:data.errors})
               }
           
         
             if(data.id){
                localStorage.setItem("currentUser", JSON.stringify(data)); 
             }
    
    }catch(err){
        dispatch({
            type:userTypes.USER_SIGNIN_FAIL,
            payLoad:err.response && err.response.data.message
            ? err.response.data.message : err.message
        })
    }  
}

export const signOut=()=>async(dispatch)=>{
    localStorage.removeItem("currentUser")
    localStorage.removeItem("requestItems")
    
    dispatch({type:userTypes.USER_SIGNOUT_SUCCESS})
}


export const signup=(formData)=>async(dispatch)=>{
    dispatch({type:userTypes.USER_SIGNUP_REQUEST,payLoad:formData})
    
    try{
        const {data} = await Axios.post("/api/auth/signup",formData);
        console.log("data",data);
        

        if(data.errors){
            dispatch({type:userTypes.USER_SIGNUP_ERROR,payLoad:data.errors})
            }
        
     if(!data.user.verified && data.user._id) {
                const VerificationMessage=
                 "We've sent verification code to your email"
             dispatch({type:userTypes.USER_SIGNUP_VERIFICATION,
                        payLoad:{VerificationMessage,userId:data.user._id}})
              }     
    }catch(err){
        if(err?.response?.data){
            const {data}=err?.response
            dispatch({type:userTypes.USER_SIGNUP_FAIL,
                payLoad:data})
  }
        }  
}



export const userEmailVerification=(verificationString,userId)=>async(dispatch)=>{
    dispatch({type:userTypes.USER_EMAIL_VERIFICATION_REQUEST,payLoad:{verificationString,userId}})
    
    try{
        const {data} = await Axios.post(`/api/auth/email-verification`,{verificationString,userId});
        console.log("data",data);
        
        if(data.id){
            dispatch({
                type:userTypes.USER_EMAIL_VERIFICATION_SUCCESS,
                payLoad:data})
           } 
           
           if(data.error){
            dispatch({
                type:userTypes.USER_EMAIL_VERIFICATION_ERROR,
                payLoad:data.error})
               }
           
          if(data.id){
                localStorage.setItem("currentUser", JSON.stringify(data)); 
             }
           
    }catch(err){
        if(err?.response?.data){
            const {data}=err?.response
            dispatch({type:userTypes.USER_EMAIL_VERIFICATION_FAIL,
                payLoad:data});
  }
}  
}









export const userDetails=(userId)=>async(dispatch,getState)=>{
    dispatch({type:userTypes.USER_DETAILS_REQUEST,payLoad:userId});
    
    const {userData:{currentUser}}=getState();
    try{
        const {data}=await Axios.get(`/api/auth/${userId}`,{
            headers:{
                Authorization:`Bearer ${currentUser.token}`
            }
        });
        dispatch({type:userTypes.USER_DETAILS_SUCCESS,payLoad:data})
    }catch(err){
        dispatch({type:userTypes.USER_DETAILS_FAIL,
            payLoad:err.response && err.response.data.message
            ?err.response.data.message:err.message})
    }
}


export const updateUserProfile=(user)=>async(dispatch,getState)=>{
    dispatch({type:userTypes.USER_PROFILE_UPDATE_REQUEST,payLoad:user});
    const {userData:{currentUser}}=getState();
    
    try{
        const {data}= await Axios.put("/api/auth/profile",user,{
            headers:{
                Authorization:`Bearer ${currentUser.token}`
            }
        })
      
        dispatch({type:userTypes.USER_PROFILE_UPDATE_SUCCESS,payLoad:data});
        dispatch({type:userTypes.USER_SIGNIN_SUCCESS,payLoad:data});
        localStorage.setItem("currentUser",JSON.stringify(data));
        
    }catch(err){
        dispatch({type:userTypes.USER_PROFILE_UPDATE_FAIL,
            payLoad:err.response && err.response.data.message
            ?err.response.data.message:err.message}) 
    }
}