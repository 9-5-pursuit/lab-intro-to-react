import React from "react";
import Image from "../profile.png";

function UserProfile() {
  return (
    <div className="UserProfile">
      <img src={Image} alt="" width="100" height="100" />
      <h2>Jordan Walke</h2>
      <p>React Creator</p>
      <p>Lorem Ipsem</p>
    </div>
  );
}

export default UserProfile;
