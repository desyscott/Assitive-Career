import React from "react";
import Hero from "../components/Hero/index";
import MentorSection from "../components/MentorSection/index";
import EventSection from "../components/EventSection/index"
import TestimonalSection from "../components/TestimonialSection/index"
import AboutUs from "../components/AboutUs/index"
import ContactUs from "../components/ContactUs/index"
import FAQ from "../components/FAQ/index"
import ScrollToTopButton from "../components/ScrollToButton/ScrollToTop"

import {HomeObjOne,HomeObjTwo,HomeObjThree,HomeObjFour,HomeObjFive} from "../components/LandingData/LandingData"

const Landing=(props)=>{
  const { home, event,mentor,testimonal,contactUs,aboutUs,faq}=props
  return (
    <>
        <ScrollToTopButton/>
    <div ref={home}>
      <Hero {...HomeObjOne}/>
    </div>
      
    <div  ref={aboutUs}>
     <AboutUs {...HomeObjTwo}/>
    </div>
    
    
    <div  ref={event}>
     <EventSection {...HomeObjFour}/>
    </div>
    
    <div  ref={mentor}>
     <MentorSection {...HomeObjThree}/>
    </div>
    
    <div  ref={testimonal}>
     <TestimonalSection {...HomeObjFour}/>
    </div>
    
    <div  ref={faq}>
     <FAQ {...HomeObjFive}/>
   </div>
   
    <div  ref={contactUs}>
     <ContactUs {...props}/>
   </div>
   
  
    </>
  );
}

export default Landing;
