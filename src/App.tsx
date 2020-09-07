import React, { useState } from 'react';

import Home from './containers/Home'
import Login from './containers/Login'

import './App.css';
import NavBar from './containers/NavBar/NavBar';

function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <NavBar setOpen={setOpen} />
      <Home />
      <Login open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
