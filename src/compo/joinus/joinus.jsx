import React from "react";
import "./joinus.scss";
import {useNavigate} from "react-router-dom";
import Individual_icon from "../../assets/icons/individual_icon";
import Arrow_right from "../../assets/icons/arrow_right";
import Briefcase_icon from "../../assets/icons/briefcase_icon";

function JoinUs() {

  const navigate = useNavigate();

  const navigateToRegister =()=>{
    navigate('/register');
  }

  return (
    <div className="joinus">

      <div className="joinus__signin">
        Already have an account? <span>Sign In</span>
      </div>
    
      <div className="joinus__heading">join us!</div>

      <div className="joinus__message">
        To begin this journey, tell us what type of <br />
        account you’d be opening.
      </div>

      <div className="plan__btn" onClick={navigateToRegister}>
        <div className="plan__btn__icon"><Individual_icon/></div>
        <div className="plan__btn__heading_message">
            <div className="plan__btn__heading">individual</div>
            <div className="plan__btn__message">Personal account to manage all you activities.</div>
        </div>
        <div className="plan__btn__go_arrow"><Arrow_right/></div>
      </div>

      <div className="plan__btn" onClick={navigateToRegister}>
        <div className="plan__btn__icon"><Briefcase_icon/></div>
        <div className="plan__btn__heading_message">
            <div className="plan__btn__heading">business</div>
            <div className="plan__btn__message">Own or belong to a company, this is for you.</div>
        </div>
        <div className="plan__btn__go_arrow"><Arrow_right/></div>
      </div>

    </div>
  );
}

export default JoinUs;
