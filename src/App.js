import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import "./index.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <section className="main">
                <UserProfile />
                <Posts />
                <Contacts />
            </section>
        </div>
    );
}

export default App;
