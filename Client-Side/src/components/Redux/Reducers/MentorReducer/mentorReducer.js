import mentorTypes from "./mentorTypes"

const INITIAL_STATE = {
    mentors:[],
    mentor:{},
    loading:true
}

const mentorReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
       case mentorTypes.FETCH_MENTORS_REQUEST:
        return{
            ...state,
            loading:true,
        }
        
       case mentorTypes.SET_MENTORS: 
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
      
      case mentorTypes.SET_MENTOR:
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