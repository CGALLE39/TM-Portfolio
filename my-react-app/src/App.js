import './App.css';
import './component/About';
import About from "./component/About";
import React from "react";
import Skills from "./component/Skills";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Resources from "./component/Resources";
import Tminfo from "./component/Tminfo";

export default function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <Tminfo />
            <About />
            <Skills />
            <Contact />
            <Resources />
        </main>
    );
}
