import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import TrackCase from "./TrackCase";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trackCase" element={<TrackCase />} />
      </Routes>
    </div>
  );
}

export default App;
