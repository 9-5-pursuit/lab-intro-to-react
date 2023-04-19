import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <div className="body">
        <UserProfile />
        <Contacts />
        <Posts />
      </div>
    </div>
  );
}

export default App;
