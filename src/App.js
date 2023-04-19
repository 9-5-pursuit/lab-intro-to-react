import React from 'react';
import "./index.css";
import NavBar from './Components/NavBar';
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

function App () {
  return (
    <div className="App">
      
      <div style={{ backgroundColor: "lightblue" }}>
        <NavBar />
      </div>

      <div>
        <UserProfile />
      </div>

      <div>
        <Posts />
      <div>
      
      <div>
        <Contacts />
      </div>
    
    </div>
   </div>
  </div>
  );
};

export default App;
