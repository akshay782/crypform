import React from "react";
import Logo from "./../../assets/icons/logo";
import Corner_prop from "./../../assets/icons/corner_prop";
import Green_tick from "./../../assets/icons/green_tick";
import "./layout.scss";

const Layout = (props) => {
  return (
    <div className="outer_container">
      
      <div className="rightside">
        <div className="brand">
          <div className="logo">
            <Logo />
          </div>
          <div className="brand_name">Oasis</div>
        </div>
        <div className="message_box">
          <div className="message">
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
          </div>
          <div className="by_whom">
            Vinecent Obi{" "}
            <span>
              <Green_tick />
            </span>
          </div>
          <div className="prop_corner">
            <Corner_prop />{" "}
          </div>
        </div>
      </div>

      <div className="leftside">{props.children}</div>
    </div>
  );
};

export default Layout;
