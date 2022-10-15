import React,{useState,useEffect,useRef} from "react";
import { Link,useParams } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import {signup} from "../Redux/Reducers/userReducer/userActions"
import "./signUp.css"
import LoadingBox from "../LoadingBox/index"
import MessageBox from "../MessageBox/index"
import logo from "../Assets/images/logo.svg"

const mapState=({userData})=>({
  currentUser:userData.currentUser,
  signUpErrors:userData.signUpErrors,
  loading:userData.loading,
  userVerificationMessage:userData.userVerificationMessage,
  error:userData.error,
  
})

function SignUp() {
  const {currentUser,loading,signUpErrors,error,userVerificationMessage}=useSelector(mapState);
  const dispatch= useDispatch()
  const inputRef=useRef();
  const params=useParams();
  const role=params.signUpRole
  

  const [values, setValues] = useState({
    name: "",
    email: "",
    role:"",
    password: "",
    confirmPassword: "",
  });
  const [fileName,setFileName]=useState();
  
  
  
  const handleChange = (e) => {
    const {name,value}=e.target
    setValues({
      ...values,
      [name]:value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,role,Cv,email,password,confirmPassword}=values;

    if(password !== confirmPassword){
      alert("password and confirm password do not match")
    }else{
      dispatch(signup(name,role,email,Cv,password));
      console.log(name,Cv,role)
    }
  };
  
  useEffect(()=>{
    setValues({role:role});
  if( inputRef &&  inputRef.current){
    inputRef.current.focus();
  } 

  },[params, role])
  
   
    if(params.signUpRole!=="Mentor" && params.signUpRole!=="Student"){
     return  <MessageBox variant="danger">404 Page not found ( . .</MessageBox>
    }
  

  return (
    <div className="Main">
   <div className="form-logo">
    <img src={ logo} alt="logo"/>
    </div>
    
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit} enctype="multipart/form-data">
        
        <div>
          <h2>
           Create Account
          </h2>
          </div>
          {userVerificationMessage && <p>{userVerificationMessage}</p>}
          <div>
            <label htmlFor="name">Name</label>
            <input
            ref={inputRef}
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              required
              value={values.name}
              onChange={handleChange}
           
            />
            {signUpErrors && <span className="error">{signUpErrors.name}</span>}
          </div>
          
          
          <div>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              name="role"
              value={values.role}
              onChange={handleChange}
              disabled
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
              required
              onChange={handleChange}
            />
              {signUpErrors && <span className="error">{signUpErrors.email}</span>}
          </div>
        
          

          {params.signUpRole==="Mentor"? (
           
          (
            <div>
            <label htmlFor="Cv">Upload CV</label>
            <input
              type="file"
              name="Cv"
              required
            />
          </div> 
             )
      
          ):(
            <div>
            <label htmlFor="Cv">Upload CV</label>
            <input
              type="file"
              name="Cv"
              
            />
          </div>
      
          )}
          
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              required
              value={values.password}
              onChange={handleChange}
            />
              { signUpErrors && <span className="error">{ signUpErrors.password}</span>}
          </div>
          
          
          <div>
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Enter confirm password"
              required
              value={values.confirmPassword}
              onChange={handleChange}
            />
          </div>
          
              
          <div>
          <label/>
          <button type="submit" class="btn btn-primary">{loading ?<LoadingBox/>:<>Sign Up</>}</button>
          </div>
          <div>
           <label/>
            <div>
             Already have an account? {' '} 
             <Link to="/signIn">Sign-In</Link>
            </div>
          </div>
      
        </form>
      </div>
    </div>
  );
}

export default SignUp;
