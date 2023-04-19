import React from "react";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";

import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <section className="main">
        <div className="userProfDiv">
          <UserProfile />
        </div>
        <div className="contactDiv">
          <Contacts />
        </div>
        <div className="postDiv">
          <Posts />
        </div>
      </section>
    </div>
  );
}

export default App;
