import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import CustomProducts from "./Custom Component/CustomProducts";
import Footer from "./Custom Component/Footer";
import Home from "./Pages/Home";
import Navbar from "./Custom Component/Navbar";
import Product from "./Pages/Product";
import ScrollToTop from "./Custom Component/ScrollToTop";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
