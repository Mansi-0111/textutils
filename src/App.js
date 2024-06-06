// import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      // setInterval(()=>{document.title='text utils'},1500);
      // setInterval(()=>{document.title='Hello this is your first app'},2000);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar name="Mansi" toggleMode={toggleMode} mode={mode}/>
      
      <div className="container">

    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Textform/>} />
      </Routes>
    </BrowserRouter>

      </div>
      
    </>
  );
}

export default App;
