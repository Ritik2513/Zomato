import React from "react";
import { Navbar } from "./pages/Navbar";
import { Hero } from "./pages/Hero";
import { Categories } from "./pages/Categories";
import { Restaurants } from "./pages/Restaurants";
import { Experience } from "./pages/Experience";
import { Gold } from "./pages/Gold";
import { Collections } from "./pages/Collections";
import { Brands } from "./pages/Brands";
import { DownloadApp } from "./pages/DownloadApp";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Restaurants />
      <Experience />
      <Gold />
      <Collections />
      <Brands />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default App;
