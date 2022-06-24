import React,{useState} from "react";
import "./bankverifyform.scss";
import Input from "../Input/input";
import Lock from "../../assets/icons/lock";

function Bankverifyform(props) {
    const[bvn, setBVN] = useState("");
  return (
    <form>
      <Input
        htmlFor="bvn"
        type="number"
        name="bvn"
        id="bvn"
        value={bvn}
        label="Bank verification number (BVN)*"
        placeholder="Please enter BVN"
        onChange={(e) => setBVN(e.target.value)}
      />
     
      <button className="click_register mt">save &amp; continue</button>

      <div className="security_msg">
        <span>
          <Lock />
        </span>
        Your Info is safely secured
      </div>
    </form>
  );
}

export default Bankverifyform;
