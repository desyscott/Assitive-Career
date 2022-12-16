import React,{useState,useEffect} from 'react'
import "./index.css"
import {data} from "./data"
import {Link} from "react-router-dom"

function EventsNews() {
  const [currentSlide,setCurrentSlide]=useState(0);
  const slideLength =data.eventHeroSlider.Length;   
  
  const nextSlide=()=>{
    setCurrentSlide(currentSlide===slideLength-1? 0: currentSlide+1)
  }
  
  const prevSlide=()=>{
    setCurrentSlide( currentSlide===0 ? slideLength-1:currentSlide-1)
    
  }
       const autoScroll = true;
       let slideInterval;
       let intervalTime = 4000;

 function auto(){
  slideInterval = setInterval(nextSlide, intervalTime)
 }
  
  
  useEffect(() => {
    setCurrentSlide(0);
    if(autoScroll){
      auto()
    }
   return  ()=>clearInterval(slideInterval)
  }, [currentSlide]);
  
  
  return (
    <div className="events-news">
    
    <div>
    {data.eventHeroSlider.map((event, index)=>(
     
      <div  className={index=== currentSlide ? "event-card big":"event-card big"}>
    
      <div className="event-big-card-infor">
       <div className="event-big-card-type"><p>{event.type}</p></div>
       <span>{event.date}</span>
       <h3>{event.title}</h3>
       <div className="event-card-btn-wrapper">
              <div className="event-big-card-btn">
                 <Link>See Details</Link>
                </div>
                </div>
      </div>
     
      
      <img src={event.img} alt="" className="event-big-card-img"/>
      </div>
    
    ))}
    <div className="event-transition-circle">
    <div className="event-trans-circle-1"></div>
    <div className="event-trans-circle-2"></div>
    </div>
      
      </div>
      
      <div>
        <h1>Hiring</h1>
        {data.eventData.map((event,index)=>(
          
          <div className="event-card small">
            <img src={event.img} alt="" className="event-card-img"/> 
            <div className="event-card-infor">
              <div className="event-card-details"> 
                 <p>{event.type}</p>
                 <span>{event.date}</span>
              <h5>{event.title}</h5>
              </div>
             <div className="event-card-btn-wrapper">
              <div className="event-card-btn">
                 <Link>See Details</Link>
                </div>
                </div>
            </div>
          </div>
        ))}
      </div>
      
      <div>
      <h1>Webinar</h1>
      <div className="event-card small">
      <img src={data.img} alt="" className="event-card-img" /> 
         <div className="event-card-infor">
              <div className="event-card-details"> 
              <p>{data.type}</p>
              <span>{data.date}</span>
              <h5>{data.title}</h5>
              </div>
         
              <div className="event-card-btn">
                 <Link>See Details</Link>
                </div>
          </div>
      </div>
      </div>
      
    </div>
  )
}

export default EventsNews
