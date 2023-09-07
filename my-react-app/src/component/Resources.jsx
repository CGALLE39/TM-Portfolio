import React from "react";

export default function Resources() {
    return (
    <section >
        <h1 className="title-font text-center mt-8 sm:text-1xl text-3xl mb-4 font-medium text-white">
            Simply answer some questions in the form below about your trademark and your business, and an attorney will get in touch about next steps.
            Once the attorney confirms with you that everything is ready to go, they'll e-file with the USPTO.
        </h1>
        <div id="resources" className="flex justify-center mt-8">
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeBzPh8m_Skw6RWflpE_NsViL58Xw8fUTehVXJjp1hF1GXDBw/viewform?embedded=true"
            width="640"
            height="382"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0">
            Loading…
        </iframe>
        </div>
    </section>
)
}

