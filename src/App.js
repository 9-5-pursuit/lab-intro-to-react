import React from "react";
import "./index.css";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";



function App() {
  // return <p>Hello, world!</p>;
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
