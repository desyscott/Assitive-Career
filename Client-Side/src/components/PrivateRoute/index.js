import React from 'react'
import {Route,Redirect} from "react-router-dom"
import {useSelector} from "react-redux"
import MainLayout from "../MainLayout/index"

function PrivateRoute({component:Component,...restProps}) {
    const {currentUser }= useSelector(({userData}) => userData);
    
  return (
    <Route {...restProps} render={(props)=> currentUser ?
    
    (<MainLayout>
      <Component {...props}/>
     </MainLayout>
       )
    :
    (<Redirect to="/signin"/>)}/>
  )
}

export default PrivateRoute;