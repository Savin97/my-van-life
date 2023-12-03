import './App.css';
import React from "react";
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"

import NotFound from "./pages/NotFound"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>} >
          <Route index element = {<Home/>} />
          <Route path="host" />
          <Route path = "about" element = {<About />} />
          <Route path = "vans" element  = {<Vans/>} />
          
          <Route path = "*" element = {<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


