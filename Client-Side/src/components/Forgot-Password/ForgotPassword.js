import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MessageBox from "../MessageBox/index"


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError]= useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/forget-password", {email})
      .then((res) => {
        const data = res.data;
        if (data.message) {
          setMessage(data.message)
          setError("")
        }
      })
      .catch((err) => {
        if (err?.response?.data) {
          const { data } = err.response;
          console.log(data);
          setError(data.error)
        }
        console.log(err.message);
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="form">
        <div>
          <h3>Forgot Password</h3>
          </div>
         {message && <MessageBox variant="success">{message}</MessageBox>}
         
          <div>
            <label for="email">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
           {error && <span className="error">{error}</span>}
          </div>
          
           <div>
          <label/>
          <button type="submit" class="btn btn-primary">submit</button>
          </div>
          <div>
          <label/>
       
          <Link to="/signin">Back to login</Link>
          </div>
        </form>
      
      </div>
    </>
  );
}

export default ForgotPassword;
