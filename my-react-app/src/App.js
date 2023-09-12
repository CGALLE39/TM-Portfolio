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
// import {Switch} from "@material-tailwind/react";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Register from "./component/Register";
import Home from "./component/Home";

export default function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            {/*<Tminfo />*/}
            {/*<About />*/}
            {/*<Skills />*/}
            {/*<Contact />*/}
            {/*<Resources />*/}
            <Routes>

                {/*< Route path='/' element={<Home />}/>*/}
                < Route path='/' element={< Tminfo />}/>
                < Route path='/about' element={< About />}/>
                < Route path='/skills' element={< Skills />}/>
                < Route path='/contact' element={< Contact />}/>
                < Route path='/resources' element={< Resources />}/>

                < Route path='/register' element={< Register />}/>
                {/*<Route exact path='/contact' element={< Contact />}></Route>*/}
            </Routes>

            <Footer />
        </main>
    );
}
