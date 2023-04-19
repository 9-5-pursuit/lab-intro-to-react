import React from "react";
import "./index.css";
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import Posts from './Components/Posts';
import Post from './Components/Post';
import Contacts from './Components/Contacts';
import ContactUserCard from './Components/ContactUserCard'

function App () {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <UserProfile />
        <Posts />
        <Contacts />
      </main>
    </>
  )
};

export default App;
