import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Features from "../pages/Features";
import Team from "../pages/Team";
import Testimonial from "../pages/Testimonial";
import Contact from "../pages/Contact";
import Page from "../pages/Page";
import Appoinment from "../pages/Appoinment";
import Error from "../pages/Error";
export default function Master() {
    return (
        <BrowserRouter>
            <Header />
            <Nav />

            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/features' element={<Features />}></Route>
                <Route path='/team' element={<Team />}></Route>
                <Route path='/testimonial' element={<Testimonial />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/page' element={<Page />}></Route>
                <Route path='/appoinment' element={<Appoinment />}></Route>
                <Route path='/error' element={<Error />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}