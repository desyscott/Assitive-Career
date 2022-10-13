import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError]= useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/forget-password", { email })
      .then((res) => {
        const data = res.data;
        if (data) {
          console.log(data);
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
            {error && <p>{error}</p>}
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
