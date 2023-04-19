import React from "react";
import Profile1 from "./profile.png";

function ContactUserCard(props) {
  const { name, jobTitle } = props;

  return (
    <div>
      <img src={Profile1} alt={name} />
      <h2>{name}</h2>
      <h3>{jobTitle}</h3>
      <p>Lorem Ispem</p>
    </div>
  );
}

export default ContactUserCard;
