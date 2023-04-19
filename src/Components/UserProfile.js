import React from "react";
import ContactUserCard from "./ContactUserCard";
// import profileImg from "./public/profile.png";
//This is the child element of App.js

function UserProfile() {
  return (
    <div id="profile">
      <aside id="profile-pic">
        <img src="profile.png" alt="profile" />
      </aside>
      <main id="profile-main">
        <h2>Jordan Walker </h2>
        <h3>React Creator </h3>
        <h4>Lorem ipsen </h4>
      </main>
    </div>
  );
}

export default UserProfile;
