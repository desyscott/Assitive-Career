import React from 'react'
import "./index.css"

const MessageBox=({children,variant})=>{
  return (
    <div className={`alert alert-${variant || "info"}`}>
    {children}
    </div>
  )
}

export default  MessageBox