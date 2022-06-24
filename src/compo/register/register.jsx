import React, { useState } from "react";
import "./register.scss";
import Back_arrow from "../../assets/icons/back_arrow";
import Google from "../../assets/icons/google";
import Input from "../Input/input";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="registration">
      <div className="registration_top">
        <a href="/"><div className="register_back_btn">
          <Back_arrow />
          back
        </div></a>
        <div className="register_page_info">
          <div className="first_child">step 01/03</div>
          <div className="second_child">personal info.</div>
        </div>
      </div>
      <div className="registration_container">
        <div className="registerform_heading">register individual account!</div>
        <div className="registerform_message">
          For the purpose of industry regulation, your details are required.
        </div>
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
      </div>
    </div>
  );
}

export default Register;
