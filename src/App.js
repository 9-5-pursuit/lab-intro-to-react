import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <h2>Post</h2>
      <Posts />
      <Contacts />
    </div>
  );
}

export default App;
