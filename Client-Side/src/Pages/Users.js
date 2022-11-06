import React,{useState,useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

function Users() {
  // const [file,setFile]=useState()
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState('');
  const [studentUsers,setStudentUsers]=useState([])
  
  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setUploading(true);
    axios
      .post('/upload', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
     
    
  };
  console.log(image)
  

  useEffect(()=>{
    try{
      const fetchData=async()=>{
        const {data}= await axios.get("/api/auth/users");
        setStudentUsers(data)
       }
       fetchData()
    
    }catch(err){
       console.log(err) 
    }
  },[])
  console.log(studentUsers)
  
  if(studentUsers.length===0){
    return(
      <div className="container">
    No User
    </div>)
  }
  
  return (
    <div className="content content-margined">

      <div className="mentors-header">
        <h3>Mentors</h3>
      </div>
      <div className="order-list">

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
             
              <th>FIRSTNAME</th>
              <th>LASTNAME</th>
              <th>ROLE</th>
              <th>ISVERIFIED</th>
              <th>EMAIL</th>
              <th>PROFESSION</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
          {studentUsers.map(student=>(
              
              <tr key={student._id}>
              <td>{student._id}</td>
            
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.role}</td>
              <td>true</td>
              <td>{student.email}</td>
              <td>{student.professional}</td> 
              <td>
                <Link to="" className="action-btn primary" >Details</Link>
                {' '}
                <button type="button"  className="action-btn primary">Verify</button>
                {' '}
                <button type="button"  className="action-btn danger">Delete</button>
              </td>
            </tr>
             ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Users