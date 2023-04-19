import React from "react";

import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";

import "./index.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  );
}

export default App;
