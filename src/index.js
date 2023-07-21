import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import {App} from "./App";
import {About} from  "./App";
import {Contact} from "./App";


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>}/>
      {App}
    </Routes>
    
  </BrowserRouter>,
  document.getElementById("root")
);
