import React from "react";
import "./App.css";

import {
  Footer,
  Header,
  Possibility,
  Features,
  //WhatGPT3,
  Blog,
} from "./containers";

import { Cta, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="gradient__bg">
        <Header />
      </div>
      <Cta />
      <Blog />
      <Features />
      <Possibility />
      <Footer />
    </div>
  );
};

export default App;
