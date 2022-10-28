import React,{useState} from 'react'
import "./index.css"
import {FormRadioSelect} from "../FormSelect/index"
import {data} from "./Data"
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {addDataAnaTestScore} from "../Redux/Reducers/CareerTestReducer/CareerTestAction"
import {configFilters1,configFilters2,configFilters3,configFilters4,configFilters5} from "../FormSelect/useSelectForm"




function Test() {
  const history=useHistory()
  const dispatch=useDispatch()

  const [values,setValues]=useState({
    q1:"",
    q2:"",
    q3:"",
    q4:"",
    q5:"",
  })
  
  const handleChange=(e)=>{
    const {value,name}=e.target;
    setValues({
      ...values,
      [name]:value,
    });
   
  }
  
   const handleSubmit=(e)=>{
     e.preventDefault();
    console.log(values)
    dispatch(addDataAnaTestScore(values))
    history.push("/test-results")
   }

    
  return (
    <div className="container">
    
    <form className="test-form" onSubmit={handleSubmit}> 
     <h3>Data Analytics</h3>
    {data.Question3.map((question)=>(
      <>
      <ul className="test-quiz">
      <li>
      <p>{question.Q1}</p>
      <FormRadioSelect
       {...configFilters1}
       handleChange={handleChange}
      />
      </li>
      <li>
      <p>{question.Q2}</p>
      <FormRadioSelect
       {...configFilters2}
       handleChange={handleChange}/>
      </li>
      <li>
      <p>{question.Q3}</p>
      <FormRadioSelect
       {...configFilters3}
       handleChange={handleChange}/>
      </li>
      <li>
      <p>{question.Q4}</p>
      <FormRadioSelect 
      {...configFilters4}
      handleChange={handleChange}/>
      </li>
      <li>
      <p>{question.Q5}</p>
      <FormRadioSelect 
      {...configFilters5}
      handleChange={handleChange}/>
      </li>
      
      </ul>
     
      
      </>
    ))}
     <label/>
     <div>
          <label/>
          <button type="submit" class="btn btn-primary" >
          Submit
          </button>
          </div>
    </form>
    </div>
  )
}

export default Test



 