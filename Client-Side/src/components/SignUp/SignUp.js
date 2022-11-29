import React,{useState,useEffect,useRef} from "react";
import { Link,useParams,useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import {signup} from "../Redux/Reducers/userReducer/userActions"
import "./signUp.css"
import LoadingBox from "../LoadingBox/index"
import MessageBox from "../MessageBox/index"
import logo from "../Assets/images/logo.svg"

const mapState=({userData})=>({
  signUpErrors:userData.signUpErrors,
  loading:userData.loading,
  userVerificationMessage:userData.userVerificationMessage,
  error:userData.error,
  
})

function SignUp() {
  const {loading,signUpErrors,error,userVerificationMessage}=useSelector(mapState);
  const dispatch= useDispatch()
  const inputRef=useRef();
  const params=useParams();
  const role=params.signUpRole
  
  const navigate=useNavigate()
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role:"",
    password: "",
    confirmPassword: "",
    agree:false
  });
  const [Cv,setCv]=useState("");


  const onChange=(e)=>{
    setCv(e.target.files[0])
  }
  
  const handleChange = (e) => {
    const {name,value,type,checked,}=e.target
    setValues({
      ...values,
      [name]:type==="checkbox" ? checked:value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const {firstName,lastName,role,email,password,confirmPassword,agree} = values;
    
    const formData = new FormData(); 
    formData.append("firstName",firstName);
    formData.append("lastName",lastName);
    formData.append("role",role);
    formData.append("email",email);
    formData.append("password",password);
    formData.append("Cv",Cv);
    formData.append("agree",agree);
    
    if(password !== confirmPassword){
      alert("password and confirm password do not match")
    }else{
      dispatch(signup(formData));
      console.log(values)
    }
  };
  
    
  const redirect = "/email-verification";
  
  useEffect(()=>{
    setValues({role:role});
  if( inputRef &&  inputRef.current){
    inputRef.current.focus();
  } 

  },[ navigate, params, role])
  
  useEffect(()=>{
    if(userVerificationMessage){
    navigate(redirect);
    }
  },[navigate,redirect,userVerificationMessage])
  
  
   
  if(params.signUpRole!=="Mentor" && params.signUpRole!=="Student"){
     return  <MessageBox variant="danger">404 Page not found ( . .</MessageBox>
    }
  

  return (
    <div className="Main">
   <div className="form-logo">
   <Link to="/"><img src={ logo} alt="logo"/></Link> 
    </div>
    
      <div className="form-container">
      
        <form className="signUp-form" onSubmit={handleSubmit} enctype="multipart/form-data">
        
        <div>
          <h2>
           Create Account
          </h2>
          </div>
          {error && <MessageBox variant="danger">{error}</MessageBox>}
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
            <label htmlFor="firstName">FirstName</label>
            <input
            ref={inputRef}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter FirstName"
              required
              value={values.firstName}
              onChange={handleChange}
           
            />
            {signUpErrors && <span className="error">{signUpErrors.firstName}</span>}
          </div>
          <div>
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter LastName"
              required
              value={values.lastName}
              onChange={handleChange}
           
            />
            {signUpErrors && <span className="error">{signUpErrors.lastName}</span>}
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
        
          

          {params.signUpRole==="Mentor" &&
         ( 
          <div>
            <label htmlFor="Cv">Upload CV</label>
            <input
              type="file"
              name="Cv"
              required
              onChange={onChange}
            />
          </div>
          )
           
          }
          {params.signUpRole==="Student" &&
         ( <div>
            <label htmlFor="Cv">Upload CV</label>
            <input
              type="file"
              name="Cv"
              onChange={onChange}
            />
          </div>)
           
          }
          
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
          <div>
          <input 
          type="checkbox" 
          class="check-box" 
          name="agree"
          onChange={handleChange}
           required/>
          <span class="privacy-span">By continuing, you agree to Assistive Career's <Link>Conditions of Use</Link> and <Link>Privacy Notice.</Link></span>
          </div>
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
