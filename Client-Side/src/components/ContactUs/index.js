import React from "react"
import { IconContext } from "react-icons";
import { 
    FaTwitter, 
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaPinterest,
    FaArrowRight, 
   } from "react-icons/fa";
    import "./index.css"
    import logo from "../Assets/images/logo.svg"
    import {Link} from "react-router-dom"

const ContactUs=(props)=>{
    const { home, event,contactUs,aboutUs}=props
    
    const scrollToSection=(refElement)=>{
        window.scrollTo({
          top:refElement.current.offsetTop,
          behavior:"smooth",
        })
      }
      
    return(
        <>
        <IconContext.Provider value={{color:"#d6a458"}}>
        <div className="contact-container">
        <div className="footer-row">
        
        <div className="footer-col-1">
       <img src={logo} alt="/"/>
       <p>Assistive Career is on stop destination in helping you understand yourself,the best career for you and providing you all the resources in the process</p>
        </div>
        
        <div className="footer-col">
        <h3 className="footerTitle-link">contact us<div className="underline"><span></span></div></h3>
        <ul>
          <li className="footer-li"> <a href="/"  className="footer-link">contact</a></li>  
          <li className="footer-li"> <a href="/"  className="footer-link">Supports</a></li>  
          <li className="footer-li"> <a href="/"  className="footer-link">Sponsorships</a></li>  
        </ul>
        </div>
        <div className="footer-col">
        <h3 className="footerTitle-link">Offices<div className="underline"><span></span></div></h3>
        <ul>
          <li className="footer-li"><a href="/"  className="footer-link">Ghana</a></li>  
          <li className="footer-li"><a href="/"  className="footer-link">Europe</a></li>  
          <li className="footer-li"><a href="/"  className="footer-link">Canada</a></li>  
        </ul>
        </div>

        <div className="footer-col">
        <h3 className="footerTitle-link">Link<div className="underline"><span></span></div></h3>
        <ul>
          <li className="footer-li" onClick={()=>scrollToSection(home)}><Link  className="footer-link" to="/#">home</Link></li>  
          <li className="footer-li" onClick={()=>scrollToSection(event)}><Link className="footer-link" to="/#">services</Link></li>  
          <li className="footer-li" onClick={()=>scrollToSection(aboutUs)}><Link className="footer-link" to="/#">About us</Link></li>  
          <li className="footer-li" onClick={()=>scrollToSection(contactUs)}><Link className="footer-link" to="/#">contact us</Link></li>  
        </ul>
        </div>
        </div>
    <div className="footer-row-2">
  <div className="footer-col-2">   
  <div className="SocialIcons">
    <a className="SocialIconLink" href="/" target="_blank" aria-label="facebook" rel="noopener noreferrer">
                    <FaFacebookF/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="WhatsApp" rel="noopener noreferrer">
                    <FaPinterest/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <FaTwitter/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
                    <FaYoutube/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                    <FaLinkedinIn/>
                </a> 
                </div> 
            </div>
            <div className="footer-col-2">
            <Link className="chat-link" to="/user-role">Let's chat <FaArrowRight/></Link>
            </div>
    </div>
        <hr/>
       
        </div>   
</IconContext.Provider>
        </>
    )
}

export default ContactUs;