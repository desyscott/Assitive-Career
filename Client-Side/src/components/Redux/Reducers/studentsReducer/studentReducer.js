import studentTypes from "./studentTypes"

const INITIAL_STATE = {
    students:[],
    student:{},
    loading:true,
    
}

const studentReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
       case studentTypes.FETCH_STUDENTS_REQUEST:
        return{
            ...state,
            loading:true,
        }
        
       case studentTypes.FETCH_STUDENTS_SUCCESS: 
        return{
            ...state,
            students:action.payLoad,
            loading:false,
        }
        
       case studentTypes.FETCH_STUDENTS_FAIL:
        return{
            ...state,
            loading:false,
            error:action.payLoad
        }
        
      case studentTypes.FETCH_STUDENT_REQUEST:
      return{
          ...state,
          loading:true,
      }
      
      case studentTypes.FETCH_STUDENT_SUCCESS:
      return{
        ...state,
        loading:false,
        student:action.payLoad
      }
      
      case studentTypes.FETCH_STUDENT_FAIL:
      return{
        ...state,
        loading:false,
       error:action.payLoad
      }
        
        default:return state
    }
    
}
export default studentReducer;


export const studentsDeleteReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
      case  studentTypes.DELETE_STUDENT_REQUEST:
        return {
              loading: true 
             };
      case  studentTypes.DELETE_STUDENT_SUCCESS:
        return {
                loading: false, 
                student: action.payload,
                success: true 
                 };
      case  studentTypes.DELETE_STUDENT_FAIL:
        return { 
                loading: false, 
                error: action.payload 
                };
      default:
        return state;
    }
  }

  