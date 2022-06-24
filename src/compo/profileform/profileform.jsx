import React, { useState } from "react";
import "./profileform.scss";
import Input from "../Input/input";
import Lock from "../../assets/icons/lock";

function Profileform() {
  const [phonenumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");

  return (
    <form>
      <Input
        htmlFor="phonenumber"
        type="number"
        name="phonenumber"
        id="phonenumber"
        value={phonenumber}
        label="Phone number*"
        // placeholder="Enter your name"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Input
        htmlFor="address"
        type="text"
        name="address"
        id="address"
        value={address}
        label="Your address*"
        placeholder="Please enter address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <Input
        htmlFor="country"
        type="password"
        name="country"
        id="country"
        value={country}
        label="country of residence*"
        placeholder="Please select"
        onChange={(e) => setCountry(e.target.value)}
      />

      <button className="click_register">save &amp; continue</button>

      <div className="security_msg">
        <span>
          <Lock />
        </span>
        Your Info is safely secured
      </div>
    </form>
  );
}

export default Profileform;
