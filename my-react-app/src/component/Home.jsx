import About from './About';
import React from "react";
import Skills from "./Skills";
import Contact from "./Contact";
import Resources from "./Resources";
import Tminfo from "./Tminfo";

export default function App() {
    return (
        <div className="text-gray-400 bg-gray-900 body-font">
            <Tminfo />
            <About />
            <Skills />
            <Contact />
            <Resources />
        </div>
        )
}