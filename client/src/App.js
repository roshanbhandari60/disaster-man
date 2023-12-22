import React, { useEffect, useState } from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home';
import Rules from './components/pages/Rules'
import About from './components/pages/About'
import SignUp from './components/login/SignUp'
import Guidelines from './components/pages/Guidelines';
import Volunteer from './components/volunteers/Volunteer';

function App() {
  const [dataNode, setDataNode] = useState(null);
  const [dataPhp, setDataPhp] = useState(null);

  useEffect(() => {
    // Fetch data from Node.js server
    fetch('/api/data')
      .then(response => response.json())
      .then(result => setDataNode(result))
      .catch(error => console.error('Error fetching data from Node.js:', error));

    // Fetch data from PHP server
    fetch('http://localhost:8000/index.php')
      .then(response => response.json())
      .then(result => setDataPhp(result))
      .catch(error => console.error('Error fetching data from PHP:', error));
  }, []);
  //hello updated code
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    <Routes>
      <Route path="/volunteer" element={<Volunteer/>} />
    </Routes>
    <Routes>
      <Route path="/guidelines" element={<Guidelines/>} />
    </Routes>
    <Routes>
      <Route path="/rules" element={<Rules/>} />
    </Routes>
    <Routes>
      <Route path="/about" element={<About/>} />
    </Routes>
    <Routes>
      <Route path="/signUp" element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;