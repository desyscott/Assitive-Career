import React from 'react'
import NavBar from "../NavBar/index"
import Footer from "../Footer/index"
import "./index.css"

const  index= ({children})=> {
  return (
    <div className="grid-container">
       <header className="header">
      <NavBar />
      </header>
    
      <main-body className="main-body">
      {children}
      </main-body>
      
      <footer className="footer">
      <Footer/>
    </footer>
    </div>
  )
}

export default index;