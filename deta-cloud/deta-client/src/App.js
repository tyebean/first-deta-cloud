import './App.css';
import { Routes, Route } from "react-router-dom";
import NewUserForum from '../src/components/newUserForum/newUserForum.jsx'
// import { useState } from "react";
// import * as userService from "./services/userService.js";

function App() {
  // const [user, setUser] = useState(userService.getUser());

  function handleAddUser (params) {
    
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<NewUserForum handleAddUser={handleAddUser} />} />
      </Routes>
    </div>
  );
}

export default App;
