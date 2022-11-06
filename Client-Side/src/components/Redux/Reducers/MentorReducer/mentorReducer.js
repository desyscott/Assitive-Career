import mentorTypes from "./mentorTypes"

const INITIAL_STATE = {
    mentors:[],
    mentor:{},
    loading:true,
    
}

const mentorReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
       case mentorTypes.FETCH_MENTORS_REQUEST:
        return{
            ...state,
            loading:true,
        }
        
       case mentorTypes.FETCH_MENTORS_SUCCESS: 
        return{
            ...state,
            mentors:action.payLoad,
            loading:false,
        }
        
       case mentorTypes.FETCH_MENTORS_FAIL:
        return{
            ...state,
            loading:false,
            error:action.payLoad
        }
        
      case mentorTypes.FETCH_MENTOR_REQUEST:
      return{
          ...state,
          loading:true,
      }
      
      case mentorTypes.FETCH_MENTOR_SUCCESS:
      return{
        ...state,
        loading:false,
        mentor:action.payLoad
      }
      
      case mentorTypes.FETCH_MENTOR_FAIL:
      return{
        ...state,
        loading:false,
       error:action.payLoad
      }
        
        default:return state
    }
    
}
export default mentorReducer;


export const mentorDeleteReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
      case  mentorTypes.DELETE_MENTOR_REQUEST:
        return {
              loading: true 
             };
      case  mentorTypes.DELETE_MENTOR_SUCCESS:
        return {
                loading: false, 
                mentor: action.payload,
                success: true 
                 };
      case  mentorTypes.DELETE_MENTOR_FAIL:
        return { 
                loading: false, 
                error: action.payload 
                };
      default:
        return state;
    }
  }
export const mentorVerificationReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
      case  mentorTypes.MENTOR_VERIFICATION_REQUEST:
        return {
              loading: true 
             };
      case  mentorTypes.MENTOR_VERIFICATION_SUCCESS:
        return {
                loading: false, 
                mentor: action.payload,
                success: true 
                 };
      case  mentorTypes.MENTOR_VERIFICATION_FAIL:
        return { 
                loading: false, 
                error: action.payload 
                };
      default:
        return state;
    }
  }

  