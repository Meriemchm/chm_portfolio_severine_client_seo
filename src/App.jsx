// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Meeting from "./components/Meeting/Meeting";
const Home = React.lazy(() => import('./components/Home/Home'));

function App() {
  return (
    <HelmetProvider>
    <Router>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="Rendez-vous" element={<Meeting />} />
      
      </Routes>
    </Router></HelmetProvider>
  );
}

export default App;
