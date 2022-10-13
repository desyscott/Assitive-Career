import { useState } from "react";
import {signIn} from "../Redux/Reducers/userReducer/userActions"
import {useDispatch} from "react-redux"

import { Link,useHistory,useLocation} from "react-router-dom";


const LoginUseForm = () => {

  const dispatch = useDispatch();
  const Location =  useLocation ();
  
  const [values, setValues] = useState({
    email: "",
    password: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
      
      Location.push("/home")
      // dispatch(signIn(email, password))
  };

  return { handleChange, values, handleSubmit};
};

export default LoginUseForm;
