import './App.css';
import React from "react";
import Layout from "./components/Layout"
import AuthRequired from "./components/AuthRequired"
import HostLayout from "./components/HostLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import Dashboard from './pages/Host/Dashboard';

import LogIn from './pages/LogIn';
import NotFound from "./pages/NotFound"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>} >
          <Route index element = {<Home/>} />
          <Route path = "about" element = {<About />} />
          <Route path = "vans" element  = {<Vans/>} />
          <Route path = "login" element = {<LogIn/>} />

          <Route element = {<AuthRequired/>}>
            <Route path = "host" element = {<HostLayout/>}>
              <Route index element = {<Dashboard/>}/>
            </Route>
          </Route>

          <Route path = "*" element = {<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


