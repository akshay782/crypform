import React from "react";
import Back_arrow from "../../assets/icons/back_arrow";
import "./rightsidelayout.scss";

function Rightsidelayout(props) {
  return (
    <div className="formcontainer">
      <div className="formcontainer_top">
        <a href={props.backlink}>
          <div className="formcontainer_back_btn">
            <Back_arrow />
            back
          </div>
        </a>
        <div className="formcontainer_page_info">
          <div className="first_child">step {props.pageCount}/03</div>
          <div className="second_child">{props.pageType}</div>
        </div>
      </div>
      <div className="formcontainer_container">
        <div className="formcontainer_heading">{props.title}</div>
        <div className="formcontainer_message">
          {props.message}
        </div>
      </div>

      {/* form section comes here */}
      {props.children}
    </div>
  );
}

export default Rightsidelayout;
