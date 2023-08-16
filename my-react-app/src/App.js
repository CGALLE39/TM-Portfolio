import './App.css';
import './component/About';
import About from "./component/About";
import React from "react";
import Skills from "./component/Skills";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Resources from "./component/Resources";


export default function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Skills />
            <Contact />
            <Resources />
        </main>
    );
}
