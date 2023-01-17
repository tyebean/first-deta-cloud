import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NewUser from '../src/components/newUserForum/newUser.jsx'
import * as userService from "./services/userService.js";

function App() {
  const [user, setUser] = useState(userService.getUser());

  function handleAddUser (params) {
    
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<NewUser handleAddUser={handleAddUser} />} />
      </Routes>
    </div>
  );
}

export default App;
