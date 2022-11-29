import React,{useState} from 'react'
import MessageBox from "../MessageBox/index"
import {useParams,useHistory,Link} from "react-router-dom"
import "./index.css"
import LoadingBox from '../LoadingBox/index'
// import ReactFlow from 'reactflow';


function Roadmap() {
 
  const {courseId}=useParams()
const elements=[
  {id:"1",data:{label:"Node 1"},position:{x:250,y:100}}
]
  return (
    <div className="main">
   
    <>
       <Link to ="/careers">Back to Results</Link>
         <div className="column center">
         <div className="details-nav">
         <div  className="details-btn">
         <Link to={`/course/${courseId}`}>Details</Link>
         </div>
         <div className="details-btn">
         <Link to ={`/roadmap/${courseId}`}>Roadmap</Link>
         </div>
         </div>
         
         <div className="details-modal">
          <p>Roadmap</p>
    
         </div>
      </div>
      </>
    
 </div>
 
  )
}

export default Roadmap;