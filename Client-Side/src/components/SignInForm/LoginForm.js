import React,{useEffect,useRef} from "react";
import { Link,useHistory,useLocation} from "react-router-dom";
import {useSelector} from "react-redux"
import loginUseForm from "./loginUseForm";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import "./signIn.css"
import logo from "../Assets/images/logo.svg"


const mapState=({userData})=>({
  currentUser:userData.currentUser,
  signInError:userData.signInErrors,
  loading:userData.loading,
  error:userData.error,
  
})

function LoginForm() {
  const {currentUser,loading,signInError,error}=useSelector(mapState);
  const inputRef=useRef()
  const location=useLocation()
  const history=useHistory()
  
  const redirect = location.search ? location.search.split("=")[1]:"/home";
  
  const { handleChange, values, handleSubmit} = loginUseForm();
  
  useEffect(()=>{
    if(currentUser){
    location.assign("/home")
    }
  },[history,redirect,currentUser])
  
  useEffect(()=>{
    inputRef.current.focus();
  },[])
 
  return (
    <div className="Main">
    <div className="form-logo">
    <img src={ logo} alt="logo"/>
    </div>
    
    <div> login to Assistive Career</div>
        
       
        <form onSubmit={handleSubmit} className="form">
        <div>
          <h2>Sign In</h2>
          </div>
       
        
          
          {signInError && <span>{signInError.emailVerifyMessage}</span>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div>
            <label htmlFor="email">Email</label>
            <input 
              ref={inputRef}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
              value={values.email}
              onChange={handleChange}
             
            />
           { signInError && <span className="error">{ signInError.email}</span>}
          </div>
  
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={values.password}
              onChange={handleChange}
            />
            { signInError && <span className="error">{ signInError.password}</span>}
          </div>
          
          <div >
             <div className="forgotPswd-wrapper">
            <Link to="/forgot-password">Forget password ?</Link>
            </div>
          </div>
           <div>
            <label/>
            <button type="submit" class="btn btn-primary">{loading ?<LoadingBox/>:<>Sign In</>}</button>
           </div>
          <div>
          <label/>
            <div>
            Don't have an account? {' '} 
            <Link to="/user-role">Create your account</Link>
            </div>
          </div>
     
        </form>
     
    </div>
  );
}

export default LoginForm;
