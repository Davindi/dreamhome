import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from './context/FavoritesContext';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home';
import PropertyDetails from "./pages/PropertyDetails";
import AboutUs from "./pages/About";
import ContactPage from './pages/Contact';
import PropertyPage from './pages/Properties';


function App() {

  return (
    <FavoritesProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/properties" element={<PropertyPage />} />
      </Routes>
    </BrowserRouter>
    </FavoritesProvider>
    
    
  );
}

export default App;
