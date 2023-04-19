import React from "react";

import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import "./index.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className="main">
        <div className="userprofile">
          <UserProfile />
        </div>
        <div className="posts">
          <Posts />
        </div>
        <div className="contacts">
          <Contacts />
        </div>
      </section>
    </div>
  );
}

export default App;
