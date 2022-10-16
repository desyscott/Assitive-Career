import React,{useState,useEffect} from 'react'
import axios from "axios"

function MentorRequest() {
  const [file,setFile]=useState("");
  const [uploadedFile,setUploadedFile]=useState("");
  
  const onChange=(e)=>{
    setFile(e.target.files[0])
  }
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData= new FormData();
    formData.append("file" ,file);
    
    try{
      console.log(formData);
      const res = await axios.post("/api/upload",formData,{
        headers:{"Content-Type":"multipart/form-data"}
      });
      
      const {fileName,filePath}=res.data
      setUploadedFile({fileName,filePath});
     
    }catch(err){
      if(err.response.status===500){
        console.log('There was a problem with the server')
      }else{
        console.log(err.response.data.msg)
      }
    }
  }
  
  return (
    <div className="container">
     <form onSubmit={handleSubmit}>
     <input type="file" onChange={onChange}/>
     <button type="submit">upload</button>
     </form>
     <div>{uploadedFile.fileName}</div>
     <img src={uploadedFile.filePath} alt="profile"/>
    </div>
  )
}

export default MentorRequest
