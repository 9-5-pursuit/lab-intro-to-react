import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <>
      <NavBar />
      <div className="mainArea" style={{ display: 'flex' }}>
        <div className="left" style={{ minWidth: '75%' }}>
          <UserProfile />
          <Posts />
        </div>
        <div className="right" style={{ minWidth: '25%' }}>
          <Contacts />
        </div>
      </div>
    </>
  )
};

export default App;
