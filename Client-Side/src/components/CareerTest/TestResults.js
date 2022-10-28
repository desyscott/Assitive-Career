import React from 'react'
import {useSelector} from "react-redux"


const mapState=({testData})=>({
    testScoresCyber:testData.testScoresCyber,
    testScoresWeb:testData.testScoresWeb,
    testScoresDataAna:testData.testScoresDataAna,
  
  })

function TestResults() {
    const { testScoresCyber, testScoresWeb,testScoresDataAna}=useSelector(mapState);
   
  return (
    <div className="container">  
    <div className="test-results">   
   
    <>
    <div className="test-card-1">
    <strong>Percent of Career Path</strong>
    
   
     <div>
      <span>Cyber Security</span><input type="text" value={testScoresCyber.q1
                                                           +testScoresCyber.q2
                                                           +testScoresCyber.q3+
                                                           testScoresCyber.q4+
                                                           testScoresCyber.q5}/>
     </div>
    
    <div>
      <span>Web Development</span><input type="text"
                                                     value={testScoresWeb.q1
                                                           +testScoresWeb.q2
                                                           +testScoresWeb.q3
                                                           +testScoresWeb.q4
                                                           +testScoresWeb.q5} ></input>
      </div>
      
      <div>
      <span>Data Analytics</span><input type="text" 
                                                      value={
                                                        testScoresDataAna.q1
                                                           +testScoresDataAna.q2
                                                           +testScoresDataAna.q3
                                                           +testScoresDataAna.q4
                                                           +testScoresDataAna.q5}></input>
      
    </div>
  </div>
  <div className="test-card-2">
  <p>Recommended Subject</p>
  </div>
  </> 
  
  </div>
  </div>
  )
}

export default TestResults
