import React from 'react'
import { Routes, Route} from "react-router-dom";
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Store } from './pages/Store';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/store" element={<Store />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  )
}