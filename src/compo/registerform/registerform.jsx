import React, { useState } from "react";
import "./registerform.scss";
import Google from "../../assets/icons/google";
import Input from "../Input/input";

function Registerform() {
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
          <Input
            htmlFor="name"
            type="text"
            name="name"
            id="name"
            value={name}
            label="Your fullname*"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            htmlFor="email"
            type="email"
            name="email"
            id="email"
            value={email}
            label="Email address*"
            placeholder="Enter email password"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            htmlFor="password"
            type="password"
            name="password"
            id="password"
            value={password}
            label="Create password*"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <div className="terms">
            <input type="checkbox" id="terms" name="terms" value="true" />
            <label htmlFor="terms">I agree to terms and conditions</label>
          </div>

          <button className="click_register">Register Account</button>
          <div className="or">or</div>
          <button className="click_register_google">
            <span>
              <Google />
            </span>
            Register with Google
          </button>
        </form>
  )
}

export default Registerform