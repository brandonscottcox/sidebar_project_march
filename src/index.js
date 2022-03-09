import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home/Home"
import About from "./About/About"



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);