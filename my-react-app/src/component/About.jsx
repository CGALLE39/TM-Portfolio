import React from "react";
import Jack from './Images/JackAttourney.png'
import {Link} from "react-router-dom";
export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Jack Ji
                        <br className="hidden lg:inline-block" /> Corporate Attorney
                    </h1>
                    <p className="mb-8 leading-relaxed ">
                        Jack Ji is a seasoned corporate attorney experienced in providing legal counsel to businesses of all sizes. He is recognized for his expertise in corporate law, mergers and acquisitions, contract negotiation, and corporate governance. Jack's dedication to excellence and his commitment to achieving the best outcomes for his clients have earned him a reputation as a trusted advisor in the corporate legal field.
                    </p>
                    <div className="flex justify-center">
                        <a className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            <Link to="/contact">Contact Me</Link>
                        </a>
                        {/*<a*/}
                        {/*    href="#projects"*/}
                        {/*    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">*/}
                        {/*    See My Past Work*/}
                        {/*</a>*/}
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="jack"
                        src={Jack}
                    />
                </div>
            </div>
        </section>
    );
}