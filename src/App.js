import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import { useState } from 'react'

function App() {
  const [pursuit, setPursuit] = useState(true)

  function handleButtonClick() {
    setPursuit(!pursuit);
  }
  return (
    <div style={{ backgroundColor: 'lightseagreen' }}>
      <NavBar handleClick={handleButtonClick} />
      {pursuit && (
        <div className="mainArea" style={{ display: 'flex' }}>
          <div className="left" style={{ minWidth: '75%' }}>
            <UserProfile />
            <Posts />
          </div>
          <div className="right" style={{ minWidth: '25%' }}>
            <Contacts />
          </div>
        </div>
      )}
      {!pursuit && (
        <div className="pursuit" style={{ textAlign: 'center', alignItems: 'center', height: '100vw' }}>
          <p style={{ color: 'gray' }}>
            Pursuit is a Full Stack and Computer Programming learning organization
          </p>
          <img src="https://i.imgur.com/ULRtXMv.jpg" style={{ margin: '5%' }} alt="pursuit" width="400" height="auto" />

        </div>
      )}
    </div>
  )
};

export default App;
