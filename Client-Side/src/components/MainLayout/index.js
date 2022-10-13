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
    
      <main className="main">
      {children}
      </main>
      
      <footer className="footer">
      <Footer/>
    </footer>
    
    </div>
  )
}

export default index;