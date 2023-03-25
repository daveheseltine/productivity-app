import React from "react";

function Wrapper(props) {
  return <div className={`wrapper${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Wrapper;
