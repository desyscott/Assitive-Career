import React from 'react'
import axios from "axios"
import "./index.css"

function FileUpload({files,setFiles,removeFile}) {
    
  const onChange=(e)=>{
    const file=e.target.files[0];
    file.isUploading=true;
    setFiles(file)
    
    const formData= new FormData();
    formData.append(file.name,file,file.name);
    
    axios.post("/api/upload",formData)
    .then((res)=>{
        file.isUploading=false;
        setFiles(file)
    }).catch((err)=>{
        console.log(err.message)
        removeFile(file.name)
    })
  }
  
  return (
    <div>
      <div className="file-container">
      <div className="file-input">
      <input type="file" onChange={onChange} />
      </div>
    
      </div>
      
    </div>
  )
}

export default FileUpload
