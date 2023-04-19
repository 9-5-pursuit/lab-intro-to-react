import Button from "./Buttons";
import "./NavBar.css";
import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <Button buttonText="What is Pursuit?" />
      <Button buttonText="Create an Account" />
      <Button buttonText="Sign In" />
    </div>
  );
}

export default NavBar;
