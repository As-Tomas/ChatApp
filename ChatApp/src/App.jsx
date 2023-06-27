import { Route, Routes } from "react-router-dom";
//import './App.css'

import Login from "./Pages/Login/login";
import Chats from "./Pages/Chats/chats";
import CreateChat from "./Pages/CreateChat/createChat";
import Admin from "./Pages/Admin/Admin";
import Chat from "./Pages/Chat/Chat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/ChatApp/" element={<Login />} />
        <Route path="/ChatApp/chats" element={<Chats />} />
        <Route path="/ChatApp/createchat" element={<CreateChat />} />
        <Route path="/ChatApp/admin" element={<Admin />} />
        <Route path="/ChatApp/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
