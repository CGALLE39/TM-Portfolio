import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        SCIMIRAI LLC
                    </a>
                    <FontAwesomeIcon icon="fa-sharp fa-regular fa-trademark " />

                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-white">
                    <Link to="/">Home</Link>
                    </a>
                    <a className="mr-5 hover:text-white">
                    <Link to="/skills">Skills</Link>
                    </a>
                    <a className="mr-5 hover:text-white">
                        <Link to="/about">About</Link>

                    </a>
                    <a className="mr-5 hover:text-white">
                        <Link to="/contact">Contact</Link>
                    </a>
                    <a className="mr-5 hover:text-white">
                        <Link to="/resources">Resources</Link>
                    </a>
                </nav>
            </div>
        </header>
    );
}