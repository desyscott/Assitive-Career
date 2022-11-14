import React,{useState} from 'react'
import Axios from "axios"

function Help() {
    const [file,setFile]=useState("")
    const [uploadedFile,setUploadedFile]=useState({})
    

    const handleChange=async(e)=>{
        setFile(e.target.files[0]) 
     
        const formData=new FormData()
        formData.append("file",file)
        
        try{
            const res=await Axios.post("/uploadProfileImage",formData)
            const {fileName,filePath}=res.data
            setUploadedFile({fileName,filePath})
            
        }catch(err){
            if(err.response.status===500){
                console.log('There was a problem with the server')
            }else{
                console.log(err.response.data.msg)
            }
        }
    }
    
  return (
    <div>
 
    <input type="file" onChange={handleChange}/>
    
  
    {uploadedFile ?
    ( <div>
    <h3>{uploadedFile.fileName}</h3>
   { uploadedFile && <img style={{width:"100%"}} src={uploadedFile.filePath} alt=""/>}
    </div>
    ):null}
  
    </div>
  )
}

export default Help