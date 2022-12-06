import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import {Button} from "../Button/index"
import "./LandingNavBar.css"


const LandingNavBar =(props)=>{
    
    const { home, event,mentor,testimonal,contactUs,aboutUs}=props
    
    const [scroll, setScroll] = useState(false)
  
    const changeNav =()=>{
      if(window.scrollY > 550  ){
        setScroll(true)
      }else {
        setScroll(false)
      }
    }
    
    useEffect(()=>{
      window.addEventListener("scroll",changeNav )
    },[])
  
   
    const scrollToSection=(refElement)=>{
      window.scrollTo({
        top:refElement.current.offsetTop,
        behavior:"smooth",
      })
    }
    
    return(
  <div className={scroll ? "primary-header flex active" : "primary-header flex"}>
  
   <div className="nav-logo" onClick={()=>scrollToSection(home)}>
   <Link to="/" >Assistive Career</Link>
   </div>
   
   
   <nav>
    <ul className="primary-navigation flex mobile-view">
    <li onClick={()=>scrollToSection(home)}><Link  to="/" className="landingNav-active">Home</Link></li>
    
   
    <li  className="services-dropdown">
        <Link to="/#"  className="landingNav-active">Services
        {' '}<i className="fa fa-caret-down" />
        </Link>
        <ul className="services-dropdown-content">
           <li onClick={()=>scrollToSection(event)}>
           <Link to="/#" className="landingNav-active">News/Events</Link>
           </li>
           <li onClick={()=>scrollToSection(mentor)}>
           <Link to="/#" className="landingNav-active">Mentors</Link>
           </li>
          
        </ul>
    </li>
    <li onClick={()=>scrollToSection(aboutUs)}><Link to="/#" className="landingNav-active" >About Us</Link></li>
    <li onClick={()=>scrollToSection(contactUs)}><Link to="/#" className="landingNav-active" >Contact Us</Link></li>
    <li onClick={()=>scrollToSection(home)}><Link to="/#"  className="landingNav-active">FAQ</Link></li>
    </ul>
    </nav>
   
   <div className="nav-links flex">
   <div className="downloadBtn" >
   <Button scroll={scroll} login={true}/>
    </div>
   
     
       <div className="downloadBtn">
   <Button scroll={scroll}/>
    </div>
    <div className="menu-button">
    <button>&#9776;</button>
    </div>
    
       
    
  
   </div>
        </div>
    )
}


export default LandingNavBar;