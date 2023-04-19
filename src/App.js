import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

function App() {
  const user = {
    imageUrl: "",
    username: "Jordan Walke",
    jobTitle: "React Creator",
  };
  return (
    <div>
      <NavBar />
      <UserProfile
        imageUrl={user.imageUrl}
        username={user.username}
        jobTitle={user.jobTitle}
      />
      <Posts />
      <Contacts />
    </div>
  );
}

export default App;
