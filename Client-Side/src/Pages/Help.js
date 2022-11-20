import React,{useState} from 'react'
import Axios from "axios"

function Help() {
    const [file,setFile]=useState("")
    const [uploadedFile,setUploadedFile]=useState({})
    

    const uploadHandler=async(e)=>{
       const file=e.target.files[0]
       if(!file) return;
        file.isUploading = true;
        setFile(file)
        const formData=new FormData()
        formData.append("file",file)
        
        try{
            const res=await Axios.post("/uploadProfileImage",formData)
            const {fileName,filePath}=res.data
            file.isUploading = false;
            setUploadedFile({fileName,filePath})
           
            
        }catch(err){
            if(err.response.status===500){
                console.log('There was a problem with the server')
            }else{
                console.log(err.response.data.msg)
            }
        }
    }
    
    console.log(uploadedFile)
    console.log(file)
  return (
    <div>
 
 <input type="file" onChange={uploadHandler} />
    
  
    {uploadedFile.filePath ?
    ( <div>
    <h3>{uploadedFile.fileName}</h3>
   { uploadedFile && <img style={{width:"100%"}} src={uploadedFile.filePath} alt=""/>}
    </div>
    ):null}
  
    </div>
  )
}

export default Help