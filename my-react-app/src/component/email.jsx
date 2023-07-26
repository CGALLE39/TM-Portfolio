import React from 'react';
import emailjs from 'emailjs-com';
import emailjsConfig from './emailconfig';

function MyComponent() {
    const sendEmail = () => {
        emailjs.send(
            emailjsConfig.serviceId,
            emailjsConfig.templateId,
            { /* Template parameters */ },
            emailjsConfig.userId
        )
            .then((response) => {
                console.log('Email sent successfully!', response);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <div>
            {/* Your component UI */}
            <button onClick={sendEmail}>Send Email</button>
        </div>
    );
}

export default MyComponent;
