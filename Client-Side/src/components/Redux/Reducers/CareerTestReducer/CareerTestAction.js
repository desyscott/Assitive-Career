import careerTestTypes from "./CareerTestTypes"



export const addCyberTestScore=(testScore)=>(dispatch,getState)=>{
    try{
        dispatch({
       type:careerTestTypes.ADD_CYBER_TEST_SCORE,
       payLoad: testScore
       
       });
    //adding the cartItems to local storage
   localStorage.setItem("testScoresCyber",JSON.stringify(getState().testData.testScoresCyber));
        
    }catch(error){
      console.log(error)  
    }  
}

export const addWebDevTestScore=(testScore)=>(dispatch,getState)=>{
    
    try{

        dispatch({
       type:careerTestTypes.ADD_WEB_TEST_SCORE,
       payLoad: testScore
       
       });
        
    //adding the cartItems to local storage
   localStorage.setItem("testScoresWeb",JSON.stringify(getState().testData.testScoresWeb));
        
    }catch(error){
      console.log(error)  
    }
    
}

export const addDataAnaTestScore=(testScore)=>(dispatch,getState)=>{
    
    try{

        dispatch({
       type:careerTestTypes.ADD_DATA_ANA_TEST_SCORE,
       payLoad: testScore
       
       });
        
    //adding the cartItems to local storage
   localStorage.setItem("testScoresDataAna",JSON.stringify(getState().testData.testScoresDataAna));
        
    }catch(error){
      console.log(error)  
    }
    
}