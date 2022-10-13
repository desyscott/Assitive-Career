import React from 'react'
import {Link} from "react-router-dom"
import "../index.css"

const index=(props)=>{
  const {course}=props





  return (
  <div className="card" key={course._id}>
  <div className="card-body">
      <Link to={`/course/${course._id}`}>
          <h2 className="course-title">{course.title}</h2>
          <p className="course-description">{course.description}</p>
      </Link>
      </div>
  </div>

  )
}

export default index
