import React from "react";

export default function Tminfo() {
    return (
        <section id="tminfo">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Trademark Registration
                    </h1>
                    <p className="mb-8 leading-relaxed ">
                        A trademark means that a business name, brand name, tagline, logo, symbol, or design is registered with the USPTO, and that its use by others is restricted. Registering a trademark is a legal process of providing protection against competitors who want to copy your branding.
                    </p>
                    <div className="flex justify-center mt-8">
                        <a
                            href="/register"

                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Register Trademark
                        </a>
                    </div>

                </div>
            </div>
        </section>
        )
}