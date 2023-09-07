import './App.css';
import './component/About';
import About from "./component/About";
import React from "react";
import Skills from "./component/Skills";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Resources from "./component/Resources";
import Tminfo from "./component/Tminfo";
import {Footer} from "./component/Footer";
// import {Routes} from "./Route";
import {Switch} from "@material-tailwind/react";
import {Route, Router, Routes} from "react-router-dom";
import Register from "./component/Register";

export default function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <Tminfo />
            <Routes>
                {/*<Route exact path='/' element={< Home />}></Route>*/}
                <Route exact path='/register' element={< Register />}></Route>
                {/*<Route exact path='/contact' element={< Contact />}></Route>*/}
            </Routes>
            <About />
            <Skills />
            <Contact />
            <Resources />
            <Footer />
        </main>
    );
}
