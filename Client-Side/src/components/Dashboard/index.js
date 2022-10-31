import React,{useState,useEffect} from 'react'
import {Charts } from "../Charts/index"
import Axios from "axios"
import "./index.css"
import {Link} from 'react-router-dom'
import dashImg2 from "./images/dashImg2.jpg"
import dashImg3 from "./images/dashImg3.jpg"
import dashImg4 from "./images/dashImg4.jpg"
import dashImg5 from "./images/dashimg5.jpg"
import dashImg6 from "./images/dashimg6.jpg"
import dashImg7 from "./images/dashimg7.jpg"
import dashImg8 from "./images/dashimg8.jpg"
import dashImg9 from "./images/51f04fb2c2a6c79525182c461d5db1b7.svg"

function UserDashboard() {
    
      
  const [chartsData,setChartsData]=useState([])

  useEffect(()=>{
    try{
      const fetchData=async()=>{
        const {data}= await Axios.get("/api/charts");
        setChartsData(data)
       }
       fetchData()
    //    console.log(chartsData)
    }catch(err){
        
    }
    
  },[])
  return (
    <div className="dashboard">
    <div className="chart">
    
    {chartsData.map((chartData,index)=>(
        <Charts key={index} chartData={chartData}  
      />
    ))}
       
      </div>
      
      <div className="dashboard-header">
     
      <img src={dashImg9} alt="" className="dash-img-icon"/>
      <h2>Most In-Demand Programming Languages in 2022</h2>
   
      </div>
      
      <div className="dashboard-content flex">
   
     <div>
    
     <div style={{display: 'flex',}}>
     <div>
     <strong className="dashboard-subheader">1.JavaScript </strong>
     <p>What this language is used for: </p>
     <ul className="dashboard-list">
     <li>Web development </li>
     <li>Game development</li>
     <li>Mobile apps</li>
     <li>Building web servers</li>
     </ul>
     </div>
     <div className="dashboard-imgCard">
     <img src={dashImg8} alt="" className="dash-img"/>
     </div>
     </div>

<p>According to <Link>Stack Overflow’s 2020 Developer Survey</Link>, JavaScript currently stands as the most commonly-used language in the world (69.7%), followed by HTML/CSS (62.4%), SQL (56.9%), Python (41.6%) and Java (38.4%). It is also the most sought-out programming language by hiring managers in the Americas . 

JavaScript is used to manage the behavior of web pages. With it, coders can create dynamic web elements such as animated graphics, interactive maps, clickable buttons and more. Programmers who use HTML, CSS and JavaScript in tandem obtain a higher level of website control and can provide a better user experience in terms of navigation and readability. 

JavaScript is the most common coding language in use today around the world. This is for a good reason: most web browsers utilize it and it’s one of the easiest languages to learn. JavaScript requires almost no prior coding knowledge — once you start learning, you can practice and play with it immediately.

Moreover, because the language is so ubiquitous, there are countless communities, courses and avenues of professional support available online. This support, in addition to the language’s top-notch usability, makes JavaScript number one on our list of the most in-demand programming languages.  </p>


<strong className="dashboard-subheader">Additional Resources:</strong>
<p><Link>Coding Resources:Learn JavaScript</Link>— Berkeley Boot Camps</p>
<p><Link>Learn JavaScript</Link> — freecodecamp</p>
<p><Link>JavaScript and JQuery: Interactive Front End Web Development</Link> — Jon Duckett</p>
<p><Link>Learn JavaScript By Building Seven Games </Link>— freecodecamp</p>
<img src={dashImg8} alt="" className="dash-img"/>
<img src={dashImg7} alt="" className="dash-img"/>
<img src={dashImg4} alt="" className="dash-img"/>
</div>

<div>

<div style={{display: 'flex',}}>
<div>
<strong className="dashboard-subheader">2. Python</strong>
<p>What this language is used for:</p>
<ul className="dashboard-list">
<li>Back end development </li>
<li>Data science</li>
<li>App development</li>
</ul>
</div>
<div className="dashboard-imgCard">
<img src={dashImg3} alt="" className="dash-img"/>
</div>
</div>

<p>Python is a general-purpose programming language that empowers developers to use several different programming styles (i.e., functional, object-oriented, reflective, etc.) when creating programs. Several popular digital tools and platforms were developed with Python, including YouTube, Google Search and iRobot machines. It is also, according to HackerRank, the second-most in-demand programming language for hiring managers in the Americas after Python (PDF, 2.4 MB).

As one of the more easy-to-learn and -use languages, Python is ideal for beginners and experienced coders alike. The language comes with an extensive library that supports common commands and tasks. Its interactive qualities allow programmers to test code as they go, reducing the amount of time wasted on creating and testing long sections of code.  

That said, even advanced users would benefit from adding Python to their mental catalog of programming languages; with over 50% of hiring managers (PDF, 2.4MB) seeking candidates who know the language, Python is easily one of the most marketable and in-demand programming languages of 2022.</p>

<strong className="dashboard-subheader">Additional Resources:</strong>


<p><Link>Coding Resources:Learn Python</Link> — Berkeley Boot Camps</p>
<p><Link>Learn Python</Link> — freecodecamp</p>
<p><Link>The Quick Python Book</Link> — Naomi Ceder</p>
<p><Link>The Real Python Podcast</Link> — Real Python</p>
<img src={dashImg6} alt="" className="dash-img"/>
<img src={dashImg3} alt="" className="dash-img"/>
<img src={dashImg5} alt="" className="dash-img"/>
</div>

 </div>
    </div>
  )
}

export default UserDashboard
