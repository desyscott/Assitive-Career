import React,{useState,useEffect} from 'react'
import {Charts } from "../Charts/index"
import Axios from "axios"
import "./index.css"


function UserDashboard() {
    
      
  const [chartsData,setChartsData]=useState([])

  useEffect(()=>{
    try{
      const fetchData=async()=>{
        const {data}= await Axios.get("/api/charts");
        setChartsData(data)
       }
       fetchData()
    //    console.log(chartsData)
    }catch(err){
        
    }
    
  },[])
  return (
    <div>
    <div className="chart">
    
    {chartsData.map((chartData,index)=>(
        <Charts key={index} chartData={chartData}  
      />
    ))}
       
      </div>
      <div>
      <h3>Most In-Demand Programming Languages in 2022</h3>
      </div>
      
    </div>
  )
}

export default UserDashboard
