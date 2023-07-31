import React, { useState } from 'react';

const EmailPopup = ({ onClose }) => {
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSend = () => {
        // Replace the following with your actual email sending logic using a service like SMTP or an API.
        // For this example, we'll use a mock function to simulate sending an email.
        sendEmail(recipient, subject, body);
        onClose();
    };

    const sendEmail = (recipient, subject, body) => {
        console.log(`Sending email to: ${recipient}`);
        console.log(`Subject: ${subject}`);
        console.log(`Body: ${body}`);
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Compose Email</h2>
                <label htmlFor="recipient">Recipient:</label>
                <input
                    type="text"
                    id="recipient"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                />
                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <label htmlFor="body">Body:</label>
                <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <div className="actions">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default EmailPopup;
