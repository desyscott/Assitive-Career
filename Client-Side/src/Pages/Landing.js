import React from "react";
import Hero from "../components/Hero/index";
import MentorSection from "../components/MentorSection/index";
import EventSection from "../components/EventSection/index"
import TestimonalSection from "../components/TestimonialSection/index"
import ScrollToTop from "../components/ScrollToButton/ScrollToTop"

import {HomeObjOne,HomeObjTwo,HomeObjThree,HomeObjFour} from "../components/LandingData/LandingData"

const Landing=(props)=>{
  const { home, event,mentor,testimonal,aboutUs,}=props
  
  return (
    <>
    <ScrollToTop/>
    <div ref={home}>
  <Hero {...HomeObjOne}/>
    </div>
    
   <div  ref={event}>
   <EventSection {...HomeObjTwo}/>
   </div>
   
   <div  ref={mentor}>
   <MentorSection {...HomeObjThree}/>
   </div>
   
   <div  ref={testimonal}>
   <TestimonalSection {...HomeObjFour}/>
   </div>
  
    </>
  );
}

export default Landing;
