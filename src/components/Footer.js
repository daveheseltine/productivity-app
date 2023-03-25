import React from "react";

function Footer(props) {
  return <div className={`footer${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Footer;
