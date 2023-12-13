import './App.css';
import React from "react";
import Layout from "./components/Layout"
import AuthRequired from "./components/AuthRequired"
import HostLayout from "./components/HostLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import Dashboard from './pages/Host/Dashboard';
import Income from "./pages/Host/Income"
import HostVans from "./pages/Host/HostVans"
import Reviews from "./pages/Host/Reviews"
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo'; 
import HostVanPricing from './pages/Host/HostVanPricing'; 
import HostVanPhotos from './pages/Host/HostVanPhotos'; 

import LogIn from './pages/LogIn';
import NotFound from "./pages/NotFound"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "./server"
import VanDetail from './pages/Vans/VanDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>} >
          <Route index element = {<Home/>} />
          <Route path = "about" element = {<About />} />
          <Route path = "vans" element  = {<Vans/>} />
          <Route path = "vans/:id" element = {<VanDetail />}/>

          <Route path = "login" element = {<LogIn/>} />

          <Route element = {<AuthRequired/>}>
            <Route path = "host" element = {<HostLayout/>}>
              <Route index element = {<Dashboard/>}/>
              <Route path = "income" element = {<Income/>} />
              <Route path = "vans" element = {<HostVans/>} />
              <Route path = "vans/:id" element = {<HostVanDetail />} >
                <Route index element = {<HostVanInfo/>}/>
                <Route path = "pricing" element = {<HostVanPricing />}/>
                <Route path = "photos" element = {<HostVanPhotos />}/>
              </Route>
              <Route path = "reviews" element = {<Reviews/>} />

            </Route>
          </Route>

          <Route path = "*" element = {<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


