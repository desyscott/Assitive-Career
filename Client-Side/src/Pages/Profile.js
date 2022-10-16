import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { userDetails,updateUserProfile} from '../components/Redux/Reducers/userReducer/userActions'
import LoadingBox from '../components/LoadingBox/index'
import MessageBox from '../components/MessageBox/index'
import useForm from '../components/SignUp/useForm'
import { userTypes } from '../components/Redux/Reducers/userReducer/userTypes'



const mapState=({userData})=>({
    currentUser:userData.currentUser,
    loading:userData.loading,
    error:userData.error
})

const Profile =()=>{
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
    })
  }
    
},[currentUser.id,user, dispatch, setValues])
     
     
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {firstName,lastName,email,password,confirmPassword}=values;

    if(password !== confirmPassword){
      alert("password and confirm password do not match")
    }else{
      dispatch(updateUserProfile({userId:currentUser.id,firstName,lastName,email,password}));
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
          <div>
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
         
         </>)
      }
     </form>
    </div>
  )
}

export default Profile
