import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const modal = (props) => (
  <React.Fragment>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "tanslateY(-100vh)",
        display: props.show ? "block" : "none",
      }}
    >
      {props.children}
    </div>
  </React.Fragment>
);

export default modal;
