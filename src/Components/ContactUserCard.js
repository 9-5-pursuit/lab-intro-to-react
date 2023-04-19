import React from "react";
import UserImage from "./Image/profile.png";

function ContactUserCard() {
  return (
    <div className="ContactCard">
      <img src={UserImage} alt="UserImage" width="50" height="100" />
      <h2>Jordan Walke</h2>
      <p>React Creator</p>
      <p>Lorem Ipsum</p>
    </div>
  );
}

export default ContactUserCard;
