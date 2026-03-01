import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Project from "./components/Project.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import "animate.css";
// import { BrowserRouter, Routes, Route, } from "react-router";

import "remixicon/fonts/remixicon.css";
import Preloader from "./components/Preloader.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Preloader />
    {/* <BrowserRouter>
      <Routes>
        <Route /> */}
    <Navbar />
    <Hero />
    <div className="bg-blue-950">
      <About />
    </div>
    <Project />
    <div className="bg-blue-950">
      <Contact />
      <Footer />
    </div>
    {/* <Route />
      </Routes>
    </BrowserRouter> */}
  </StrictMode>,
);
