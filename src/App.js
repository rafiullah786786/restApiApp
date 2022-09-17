import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./FakeStore/header/Header";
import Home from "./FakeStore/home/Home";
import "./App.css";
import Products from "./FakeStore/products/Products";
import Contact from "./FakeStore/contact/Contact";
import About from "./FakeStore/about/About";
import Clock from "./clock/Clock";
import Signup from "./formhandling/Signup";
import ErrorPage from "./component/ErrorPage";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}
