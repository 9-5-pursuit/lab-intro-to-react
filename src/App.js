import React from "react";
import "./index.css";
import NavBar from './Components/NavBar'
import UserProfile from "./Components/UserProfile";
import PostInfo from "./Components/Posts";
import Post from "./Components/Post";
import ContactUserCard from "./Components/ContactUserCard";


function App () {
  return (
    <div className="App">
      <NavBar />
      <UserProfile />
      <PostInfo />
      <Post />
      <Post />
      <Post />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
};

export default App;
