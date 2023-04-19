import React from "react";
import ProfileImage from "./Image/profile.png";
function UserProfile() {
  return (
    <div className="userProfile">
      <img src={ProfileImage} alt="UserImage" width="100" height="200" />
      <h2>Jordan Walke</h2>
      <p>React Creator</p>
      <p>Lorem Ipsum</p>
    </div>
  );
}

export default UserProfile;
