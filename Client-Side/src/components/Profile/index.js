import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { userDetails,updateUserProfile} from '../Redux/Reducers/userReducer/userActions'
import LoadingBox from '../LoadingBox/index'
import MessageBox from '../MessageBox/index'
import useForm from '../SignUp/useForm'
import { userTypes } from '../Redux/Reducers/userReducer/userTypes'
import ProfilePhoto from "../Assets/images/blank-profile-picture-gdfa15e9f3_1280.png"
import "./index.css"
import {FiCamera} from "react-icons/fi"
import {FaFileAlt} from "react-icons/fa"
import Axios from 'axios'



const mapState=({userData})=>({
    currentUser:userData.currentUser,
    loading:userData.loading,
    error:userData.error
})

const UserProfile =()=>{
    const dispatch=useDispatch();
    const {currentUser}=useSelector(mapState);
    const {user,error,loading}=useSelector(({userDetailsData})=>userDetailsData);
    
     const {loading:profileUpdateLoading,
           error:profileUpdateError,
           success:profileUpdateSuccess}=useSelector(({userProfileUpdatedData})=>userProfileUpdatedData)
    
    const { handleChange, values,setValues, } =useForm();

    
useEffect(()=>{
  if(!user){
    dispatch({type:userTypes.USER_PROFILE_UPDATE_RESET});
    dispatch(userDetails(currentUser.id));
  }else{
    setValues({
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email,
      profession:user.profession,
      location:user.location,
    })
  }
    
},[currentUser.id,user, dispatch, setValues])
     
     
const [file,setFile]=useState("")
const [uploadedFile,setUploadedFile]=useState({})

const handleProfileImageChange=async(e)=>{
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
console.log(file);

// console.log(uploadedFile)
     
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {firstName,lastName,email,profession,location,password,confirmPassword}=values;

    if(password !== confirmPassword){
      alert("password and confirm password do not match")
    }else{
      dispatch(updateUserProfile({userId:currentUser.id,
                                  firstName,
                                  lastName,
                                  profession,
                                  profileImage:uploadedFile.filePath && uploadedFile.filePath,
                                  location,
                                  email,
                                  password}));
    }
 
  }
    
  return (
    <div className="container">
     <form className="form" onSubmit={handleSubmit}>
      <div>
       <h2>User Profile</h2>
      </div>
      
      
      {
         loading ? <LoadingBox></LoadingBox> :
         error ? <MessageBox variant="danger">{error}</MessageBox>
         :
         (
           
           <>
           {profileUpdateLoading && <LoadingBox></LoadingBox>}
           {profileUpdateError && <MessageBox variant="danger">{profileUpdateError}</MessageBox>}
           {profileUpdateSuccess && <MessageBox variant="success">profile updated successfully</MessageBox>}
           
           {currentUser.role==="Mentor" ?
        (  
         <>
         <div>
          <div className="profilePhoto-wrapper">
          <input type="file" className="profile_input"
          onChange={handleProfileImageChange}/>
          <img src={uploadedFile && uploadedFile.filePath ? uploadedFile.filePath:ProfilePhoto}
           alt="profile"/>
          
          <div>
          <FiCamera className="camera-icon" />
          </div>
          </div>
          
         <label htmlFor="firstName">FirstName</label>
         <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter FirstName"
          value={values.firstName}
          onChange={handleChange}
          
         />
         </div>
         
          <div>
         <label htmlFor="lastName">LastName</label>
         <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter LastName"
          value={values.lastName}
          onChange={handleChange}
          
         />
         </div>
         
          <div>
         <label htmlFor="email">Email</label>
         <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
         />
         </div>
          <div>
         <label htmlFor="profession">Profession</label>
         <input
          type="profession"
          id="profession"
          name="profession"
          placeholder="Enter Profession"
          value={values.Profession}
          onChange={handleChange}
         />
         </div>
          <div>
         <label htmlFor="location">Location</label>
         <input
          type="location"
          id="location"
          name="location"
          placeholder="Enter location"
          value={values.location}
          onChange={handleChange}
         />
         </div>
         
         <div>
            <label htmlFor="Cv">CV</label>
            <input
              type="file"
             onChange={handleProfileImageChange}
            />
          </div>
         
          <div>
         <label htmlFor="password">Password</label>
         <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
         />
         </div>
         
          <div>
         <label htmlFor="confirmPassword">confirm Password</label>
         <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Enter confirm password"
          value={values.confirmPassword}
          onChange={handleChange}
         />
         </div>
         
         <div>
         <label/>
         <button 
         className="btn btn-primary"
         type="submit"
         >update</button>
         </div>
         </>
         )
        :
        (
           <>
          <div>
          <div className="profilePhoto-wrapper">
          <input type="file" className="profile_input"
          onChange={handleProfileImageChange}/>
         {uploadedFile && uploadedFile.filePath? 
          (
           <>
           <img src={uploadedFile.filePath}
           alt="profile"/>
          </>
          ):(
            <>
            <img src={ProfilePhoto}
           alt="profile"/>
          
          <div >
          <FiCamera className="camera-icon" />
          </div>
            </>
          )
          }
          
          </div>
         <label htmlFor="firstName">FirstName</label>
         <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter FirstName"
          value={values.firstName}
          onChange={handleChange}
          
         />
         </div>
         
          <div>
         <label htmlFor="lastName">LastName</label>
         <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter LastName"
          value={values.lastName}
          onChange={handleChange}
          
         />
         </div>
         
          <div>
         <label htmlFor="email">Email</label>
         <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
         />
         </div>
         
         <div>
            <label htmlFor="Cv">CV</label>
            <input
              type="file"
             onChange={handleProfileImageChange}
            />
          </div>
          
          {  
          currentUser.cv &&
         <div>
          
            <div className="mentor-document">
            <FaFileAlt className="file-icon"/>{currentUser.cv}
            </div>
          </div>
     
      
      }
         
          <div>
         <label htmlFor="password">Password</label>
         <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
         />
         </div>
         
          <div>
         <label htmlFor="confirmPassword">confirm Password</label>
         <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Enter confirm password"
          value={values.confirmPassword}
          onChange={handleChange}
         />
         </div>
         
         <div>
         <label/>
         <button 
         className="btn btn-primary"
         type="submit"
         >update</button>
         </div>
         </> 
         )
           }
         </>
         
         )
      }
     </form>
    </div>
  )
}

export default UserProfile
