import courseTypes from "./courseTypes"

const INITIAL_STATE = {
    courses:[],
    course:{},
    loading:true
}

const coursesReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
       case courseTypes.FETCH_COURSES_REQUEST:
        return{
            ...state,
            loading:true,
        }
        
       case courseTypes.SET_COURSES: 
        return{
            ...state,
            courses:action.payLoad,
            loading:false,
        }
        
       case courseTypes.FETCH_COURSES_FAIL:
        return{
            ...state,
            loading:false,
            error:action.payLoad
        }
        
      case courseTypes.FETCH_COURSE_REQUEST:
      return{
          ...state,
          loading:true,
      }
      
      case courseTypes.SET_COURSE:
      return{
        ...state,
        loading:false,
        course:action.payLoad
      }
      
      case courseTypes.FETCH_COURSE_FAIL:
      return{
        ...state,
        loading:false,
       error:action.payLoad
      }
        
        default:return state
    }
    
}
export default coursesReducer;