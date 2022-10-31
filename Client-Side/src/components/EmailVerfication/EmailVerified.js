import React, {useState, useEffect } from "react";
import { Link, useParams,useLocation } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import {userEmailVerification} from "../Redux/Reducers/userReducer/userActions"
import LoadingBox from "../LoadingBox/index";
import MessageBox from "../MessageBox/index";
import "./index.css"




const mapState=({userData})=>({
  emailVerifiedMessage:userData.emailVerifiedMessage,
  loading:userData.loading,
  emailVerificationError:userData.emailVerificationError,
  userVerificationMessage:userData.userVerificationMessage,
  error:userData.error,
})

const EmailVerified=()=>{
  const { 
         emailVerifiedMessage,
         userVerificationMessage,
         loading,
         error}=useSelector(mapState)
  
  const dispatch=useDispatch();
 
  
  const [verificationString,setVerificationString]=useState("")
  

  // useEffect(() => {
  //   dispatch(userEmailVerification(userId,verificationString))
  // }, [dispatch, userId, verificationString]);

  // if (loading) {
  //   return (
  //     <div>
  //      <LoadingBox/>
  //       <h3>wait a moment verifying email</h3>
  //     </div>
  //   );
  // }
  
  // if (error) {
  //   return (
  //     <div>
  //   <MessageBox variant="danger">{error.error}</MessageBox>
  //     </div>
  //   );
  // }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(userEmailVerification(verificationString,userVerificationMessage.userId))
    console.log(verificationString)
  }
  


  return (
    <div className="verification-box">
    <form className="verification-form" onSubmit={handleSubmit}>
    
    <div>
          <h2>OTP Verification</h2>
    </div>
      {userVerificationMessage  && <MessageBox variant="success">{userVerificationMessage.VerificationMessage}</MessageBox>}
      {error  && <MessageBox variant="danger">{error.error}</MessageBox>}
      <div>
      <label/>
      <input   
        type="text"
        id="verificationString"
       name="verificationString"
       required
      placeholder="Enter verification code"
      value={verificationString}
       onChange={(e)=>setVerificationString(e.target.value)}/>
      </div>
      <div>
      <label/>
      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default EmailVerified;
