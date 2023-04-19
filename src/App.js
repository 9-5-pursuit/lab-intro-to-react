import React from "react";
import "./index.css";

import Posts from './Components/Posts'
import Contacts from './Components/Contacts'
import UserProfile from './Components/UserProfile'
import NavBar from './Components/NavBar'

function App () {
  return (
  <div className="app">
  <NavBar />
  <UserProfile />
  <Posts />
  <Contacts />
  </div>
  );
}

export default App;
