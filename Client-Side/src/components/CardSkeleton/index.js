import React from 'react'
import Skeleton from 'react-loading-skeleton'
import "./index.css"

const CardSkeleton=({cards})=> {
  return Array(cards).fill(0).map((item,index)=>(
      <div key={index} className="card-skeleton">
        <Skeleton className="card-title" width={"50%"}/>
        <Skeleton rectangle width={"100%"} height={"100%"}/>
     
      <Skeleton width={"100%"}/>
      
     </div>
     ))
    
  
}

export default CardSkeleton