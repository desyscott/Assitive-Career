import React from 'react'
import "./index.css"

const LoadingBox=({text})=>{
  return (
    <div className="loading">
      <i className="fa fa-spinner fa-spin"/> { text? text: "Loading..."}
    </div>
  )
}

export default LoadingBox
 