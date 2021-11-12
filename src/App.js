import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from './/styles/GlobalStyle'

// Comps
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
