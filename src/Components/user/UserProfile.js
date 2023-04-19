import {  senior } from "../../dummyData";

import "./user.css"

const UserProfile = () => {

  return (
    <div className="profile">
      <img className="profile-pic"
        src={senior.picture}
        alt="profile"
      />
      <div className="profile-info">
        <h4 className="profile-info__name">
          {senior.full_name}
        </h4>
        <h6 className="profile-info__role">
          {senior.role}
        </h6>
        <p>{senior.description}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
