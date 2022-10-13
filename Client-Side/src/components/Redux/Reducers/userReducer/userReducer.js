import {userTypes} from "./userTypes"

const USER_STATE={
    currentUser:null,
    loading:false,
    signInErrors:null,
    signUpErrors:null,
    userVerificationMessage:null,
    userDetails:{}
}


const usersReducer=(state=USER_STATE,action)=>{
    switch(action.type){
        case userTypes.USER_SIGNIN_REQUEST :
        return{
            ...state,
            loading:true
        }
        case userTypes.USER_SIGNIN_SUCCESS :
        return{
            ...state,
            loading:false,
            currentUser:action.payLoad,
            signInErrors:null      
        }
        
        case userTypes.USER_SIGNIN_ERROR :
        return{
            ...state,
            loading:false,
            signInErrors:action.payLoad,
          
        }
        
        case userTypes.USER_SIGNIN_FAIL:
        return{
            ...state,
            loading:false,
            error:action.payLoad
        }
        
        case userTypes.USER_SIGNUP_REQUEST:
        return{
            ...state,
            loading:true
        }
        
        
        case userTypes.USER_SIGNUP_VERIFICATION:
        return{
            ...state,
            loading:false,
            userVerificationMessage:action.payLoad,
            signUpErrors:null
        }
        
        case userTypes.USER_SIGNUP_ERROR:
        return{
            ...state,
            loading:false,
            signUpErrors:action.payLoad,
        }
        
        case userTypes.USER_SIGNUP_FAIL:
        return{
            ...state,
            loading:false,
            error:action.payLoad
        }
      

        case userTypes.USER_SIGNOUT_SUCCESS:
        return{
            
        }
        
        
     default:return state
    }
}
export default usersReducer;


export const userDetailsReducer=(state={loading:true},action)=>{
    switch(action.type){
        case userTypes.USER_DETAILS_REQUEST:
        return{
            ...state,
            loading:true
        }
        
        case userTypes.USER_DETAILS_SUCCESS:
        return{
            ...state,
            loading:false,
            user:action.payLoad,
        }
        
        case userTypes.USER_DETAILS_FAIL:
        return{
            ...state,
            loading:false,
            error:action.payLoad,
        }
        default:return state
    }
}

export const userProfileUpdateReducer=(state={},action)=>{
    switch(action.type){
        
     case userTypes.USER_PROFILE_UPDATE_REQUEST:
        return{
         loading: true, 
        }
        
     case userTypes.USER_PROFILE_UPDATE_SUCCESS:
        return{
            loading:false, 
          success:true
        }
        
     case userTypes.USER_PROFILE_UPDATE_FAIL:
        return{
            loading: false, 
            error:action.payLoad
        }
        
        case userTypes.USER_PROFILE_UPDATE_RESET:
        return{}
        
    default:return state
        
    }
}