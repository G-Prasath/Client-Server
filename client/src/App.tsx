import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Videogallery from "./pages/Videogallery";

import Twopost from "./pages/TwoPost";
import Fourpost from "./pages/Fourpost";
import Puzzleparking from "./pages/Puzzleparking";
import Shuttleparking from "./pages/Shuttleparking";
import Towerparking from "./pages/Towerparking";
import Bikeparking from "./pages/Bikeparking";
import ASRS from "./pages/ASRS";
import Carelevator from "./pages/Carelevator";
import BackToTopButton from "./components/BackToTopButton";
import VerticalRotary from "./pages/VerticalRotary";
import Carrers from "./pages/Carrers";
import HorizontalRotaryParking from "./pages/HorizontalRotaryParking";
import BlogPg from "./pages/BlogPg";



function App() {
  return (
    <HelmetProvider>
      <Router basename="/">
        <ScrollToTop />
        <Navbar />
        <React.Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />


            <Route path="/two-post-hydraulic-system" element={<Twopost />} />
            <Route path="/four-post-hydraulic-system" element={<Fourpost />} />
            <Route path="/puzzle-parking-system" element={<Puzzleparking />} />
            <Route path="/stacker-parking-system" element={<Shuttleparking />} />
            <Route path="/tower-parking-system" element={<Towerparking />} />
            <Route path="/horizontal-rotary-parking" element={<HorizontalRotaryParking />} />
            <Route path="/vertical-rotary-parking" element={<VerticalRotary />} />
            <Route path="/bike-parking" element={<Bikeparking />} />
            <Route path="/automated-stoarge-retrival-system" element={<ASRS />} />
            <Route path="/car-elevator" element={<Carelevator />} />
            <Route path="/blog" element={<BlogPg />} />

            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<Videogallery />} />
            <Route path="/careers" element={<Carrers />} />
            <Route path="/contact-us" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
        <Clients />
        <BackToTopButton />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
