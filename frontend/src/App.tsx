import React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Wallet from "./components/Wallet/Wallet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wallet />} />

      <Route path="/test" element={<h2>Test</h2>} />
    </Routes>
  );
}

export default App;
