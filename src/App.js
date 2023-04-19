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
      <div>
        <UserProfile />
        <Contacts />
        <Posts />
      </div>
    </>
  );
}

export default App;
