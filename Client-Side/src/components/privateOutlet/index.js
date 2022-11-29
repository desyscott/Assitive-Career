import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
import {useSelector} from "react-redux"

function PrivateOutlet() {
    const {currentUser }= useSelector(({userData}) => userData);
    
  return currentUser ? <Outlet/> : <Navigate to="/signin"/> 
}

export default PrivateOutlet;