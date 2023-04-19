import React from 'react';
import "./index.css";
import NavBar from './Components/NavBar';
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard";

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
         <Post />
         <Post />
        < Post />
        <div>
      
      <div>
        <Contacts />
          <ContactUserCard />
          <ContactUserCard />
          <ContactUserCard />
          <ContactUserCard />
      </div>
    </div>
   </div>
  </div>
  );
};

export default App;
