import careerTestTypes from "./CareerTestTypes"


const INITIAL_STATE={
    testScoresCyber:[],   
    testScoresWeb:[],
    testScoresDataAna:[] 
}

const addCareerTestScoreReducer=(state=INITIAL_STATE,action)=>{
    
    switch(action.type){
    case careerTestTypes.ADD_CYBER_TEST_SCORE: 
     return{
         ...state,
         testScoresCyber:action.payLoad
        }
     
    case careerTestTypes.ADD_WEB_TEST_SCORE: 
     return{
         ...state,
         testScoresWeb:action.payLoad
        }
     
    case careerTestTypes.ADD_DATA_ANA_TEST_SCORE: 
     return{
         ...state,
         testScoresDataAna:action.payLoad
        }
     
     
    default: return state
    }
    
}

export default addCareerTestScoreReducer;