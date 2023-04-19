import React from "react";
import "./index.css";
import Posts from "./Components/Post";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";

function App() {
  // return <p>Hello, world!</p>;
  return (
    <div>
      <NavBar />
      <UserProfile />
      <main>
        <Posts />
      </main>
      <Contacts />
    </div>
  );
}

export default App;
