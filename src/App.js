import React from "react";

import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
// import Posts from "./Components/Posts";

import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </>
  );
}

export default App;
