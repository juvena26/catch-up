import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import { GiThreeFriends } from "react-icons/gi";
import ChatsList from "./components/Chat/ChatsList";

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
            <NavLink to="/chat">Chats</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/chatlist" element={<ChatsList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
