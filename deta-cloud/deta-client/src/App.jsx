import './App.css';
import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import NewUser from '../src/components/newUserForum/newUser.jsx'

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
    <Routes>
    {/* forum */}
    <Route path="/users" element={<NewUser />} />
    </Routes>
    </div>
  );
}

export default App;
