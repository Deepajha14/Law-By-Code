import React from "react";
import Test from './Components/Test';
import './index.css';
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/test' element={<Test/>} />
      </Routes>
    </div>
  );
}

export default App;
