import React,{useState,useEffect} from 'react'
import {Charts } from "../Charts/index"
import Axios from "axios"
import "./index.css"


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
    <div>
    <div className="chart">
    
    {chartsData.map((chartData,index)=>(
        <Charts key={index} chartData={chartData}  
      />
    ))}
       
      </div>
      <div>
      <h2>Most In-Demand Programming Languages in 2022</h2>
      </div>
     <h3>
     1. JavaScript
     </h3>
     <div>
   
     <p>What this language is used for: </p>
     <p>Web development </p>
     <p>Game development</p>
     <p>Mobile apps</p>
     <p>Building web servers</p>

According to Stack Overflow’s 2020 Developer Survey, JavaScript currently stands as the most commonly-used language in the world (69.7%), followed by HTML/CSS (62.4%), SQL (56.9%), Python (41.6%) and Java (38.4%). It is also the most sought-out programming language by hiring managers in the Americas (PDF, 2.4 MB). 

JavaScript is used to manage the behavior of web pages. With it, coders can create dynamic web elements such as animated graphics, interactive maps, clickable buttons and more. Programmers who use HTML, CSS and JavaScript in tandem obtain a higher level of website control and can provide a better user experience in terms of navigation and readability. 

JavaScript is the most common coding language in use today around the world. This is for a good reason: most web browsers utilize it and it’s one of the easiest languages to learn. JavaScript requires almost no prior coding knowledge — once you start learning, you can practice and play with it immediately. 

Moreover, because the language is so ubiquitous, there are countless communities, courses and avenues of professional support available online. This support, in addition to the language’s top-notch usability, makes JavaScript number one on our list of the most in-demand programming languages. 


<h3>Additional Resources:</h3>
<p>Coding Resources: Learn JavaScript — Berkeley Boot Camps</p>
<p>Learn JavaScript — freecodecamp</p>
<p>JavaScript and JQuery: Interactive Front End Web Development — Jon Duckett</p>
<p>Learn JavaScript By Building Seven Games — freecodecamp</p>


<h2>2. Python</h2>
What this language is used for:

Back end development 
Data science 
App development
Python is a general-purpose programming language that empowers developers to use several different programming styles (i.e., functional, object-oriented, reflective, etc.) when creating programs. Several popular digital tools and platforms were developed with Python, including YouTube, Google Search and iRobot machines. It is also, according to HackerRank, the second-most in-demand programming language for hiring managers in the Americas after Python (PDF, 2.4 MB).

As one of the more easy-to-learn and -use languages, Python is ideal for beginners and experienced coders alike. The language comes with an extensive library that supports common commands and tasks. Its interactive qualities allow programmers to test code as they go, reducing the amount of time wasted on creating and testing long sections of code.  

That said, even advanced users would benefit from adding Python to their mental catalog of programming languages; with over 50% of hiring managers (PDF, 2.4MB) seeking candidates who know the language, Python is easily one of the most marketable and in-demand programming languages of 2022. 

Additional Resources:

Coding Resources: Learn Python — Berkeley Boot Camps
Learn Python — freecodecamp
The Quick Python Book — Naomi Ceder
The Real Python Podcast — Real Python </div>
    </div>
  )
}

export default UserDashboard
