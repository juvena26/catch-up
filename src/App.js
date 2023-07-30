import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import { GiThreeFriends } from "react-icons/gi";

function App() {
  return (
    <div>
      <h1 className="app-title">
        Catch up <GiThreeFriends />
      </h1>
      <div className="open-navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/chat">Chat</NavLink>
          </li>
        </ul>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </div>
  );
}

export default App;
