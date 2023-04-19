import React from "react";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";
import "./index.css";



function App () {
  return (
    <div className="App">
      <NavBar/>
      <UserProfile/>
      <Posts/>
      <Contacts/>
    
    </div>
  )
};

export default App;
