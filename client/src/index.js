import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import "./index.css";
import { Price } from "./Price/price";
import { Shop } from "./Shop/shop";
import { Logare } from "./components/logare/logare";
import { Newacc } from "./components/create-new-account/newacc";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/Footer";
export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Price />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/logare" element={<Logare />} />
          <Route path="/newacc" element={<Newacc />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
