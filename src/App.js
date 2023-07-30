import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import { GiThreeFriends } from "react-icons/gi";

function App() {
  return (
    <div>
      <nav class="login-navbar">
        <div className="app-title">
          Catch up <GiThreeFriends />
        </div>

        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/chats">Chats</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </div>
  );
}

export default App;
