import React, {useState, useEffect } from "react";
import {useHistory } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import {userEmailVerification} from "../Redux/Reducers/userReducer/userActions"
import LoadingBox from "../LoadingBox/index";
import MessageBox from "../MessageBox/index";
import "./index.css"




const mapState=({userData})=>({
 currentUser:userData.currentUser,
  loading:userData.loading,
  emailVerificationError:userData.emailVerificationError,
  userVerificationMessage:userData.userVerificationMessage,
  error:userData.error,
})

const EmailVerified=()=>{
  const { 
        currentUser,
         userVerificationMessage,
         loading,
         error}=useSelector(mapState)
  
  const dispatch=useDispatch();
  const history=useHistory()
  
  const [verificationString,setVerificationString]=useState("")
  const redirect = "/home";
  
  
  useEffect(()=>{
    if(currentUser){
     history.push(redirect);
    }
  },[history,redirect,currentUser])
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
      {userVerificationMessage  &&
  <MessageBox variant="success">{userVerificationMessage.VerificationMessage}</MessageBox>
        }
      {error  && <MessageBox variant="danger">{error}</MessageBox>}
      <div>

      <input   
        type="text"
        id="verificationString"
       name="verificationString"
       required
      placeholder="Enter 4-digits code"
      value={verificationString}
       onChange={(e)=>setVerificationString(e.target.value)}/>
      </div>
      <div>
      <label/>
      <button type="submit" class="btn btn-primary">
      {loading ?<LoadingBox text=" Verify code..."/>:<>Verify code</>}
      </button>
      </div>
      <div>
      <label/>
      </div>
    </form>
    </div>
  );
}

export default EmailVerified;
