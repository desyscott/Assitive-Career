import React from 'react'
import {Navigate} from "react-router-dom"
import {useSelector} from "react-redux"

function PrivateRoute({children,...restProps}) {
    const {currentUser }= useSelector(({userData}) => userData);
    
  return currentUser ? children : <Navigate to="/signin"/> 
}

export default PrivateRoute;