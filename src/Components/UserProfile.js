import React from "react";

function UserProfile() {
  return (
    <div className="UserProfile">
      <img
        src="profile.png"
        alt="profilePic"
        height="200"
        width="200"
        id="userPic"
      />
      <h3>Itachi Uchiha</h3>
      <h4>S-Rank</h4>
      <p>The Unsung Hero</p>
    </div>
  );
}

export default UserProfile;
