import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";


function App() { 
  return ( 
    <div> 
      <div>
       <NavBar/>
      </div>

      <div id="App"> 
        <div className="user">
          <h2>UserProfile</h2>
          <UserProfile/>
        </div>
        
        <div className="posts">
          <h2>Posts</h2>
          <Posts/>
        </div>
        
        <div className="contacts">
          <h2>Contacts</h2>
          <Contacts/>
        </div>
      </div>
     
      
    </div>
  );
}
export default App;
