import React from "react";
import Profile from "./profile.png";

const UserProfile = ({ imageUrl, username, jobTitle }) => (
  <div>
    <img src={Profile} alt={username} />
    <h2>{username}</h2>
    <h3>{jobTitle}</h3>
    <p>Lorem Ipsem</p>
  </div>
);

export default UserProfile;
