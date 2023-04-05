import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import { Price } from "./pages/price";


export default function App() {
  return (
  <React.StrictMode>
      <BrowserRouter>
      <Routes>  
          <Route path="/" element={<Home/>} />
          <Route path="/price" element={<Price/>} />
        </Routes> 

      </BrowserRouter>
  </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
