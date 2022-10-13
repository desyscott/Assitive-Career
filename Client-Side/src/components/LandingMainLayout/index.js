import React from 'react'
import LandingNavBar from "../LandingNavBar/index"
import Footer from "../Footer/index"
import "./index.css"

const  index= ({children,...otherProps})=> {
  return (
    <div >
      <LandingNavBar {...otherProps}/>
      {children}
      <Footer/>
    </div>
  )
}

export default index;