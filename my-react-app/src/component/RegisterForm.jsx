import React, { useState } from 'react';

function MyForm() {
    // Initialize state variables for form fields
    const [selectedOption, setSelectedOption] = useState('business');

    // Function to handle radio button selection
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform actions with the selectedOption value here.
        console.log('Selected option:', selectedOption);
    };

    return (
        <div>
            <h2>What would you like to protect?</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="business"
                            value="Busines"
                            checked={selectedOption === 'business'}
                            onChange={handleOptionChange}
                        />
                        Business name or product
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="logo"
                            value="Logo"
                            checked={selectedOption === 'logo'}
                            onChange={handleOptionChange}
                        />
                        Stylized logo
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="slogan"
                            value="Slogan"
                            checked={selectedOption === 'slogan'}
                            onChange={handleOptionChange}
                        />
                        Slogan or tagline
                    </label>
                </div>
 //////////////////////////////////////////////////////////////////////////
                <h2 className='mt-4'>What would you like to trademark?</h2>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder={"enter mark"}
                        // value={formData.name}
                        // onChange={handleChange}
                    />

                </div>
////////////////////////////////////////////////////////////////////////
                    <h2>Are you currently using your trademark to provide products or services to consumers?</h2>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="business"
                            value="Busines"
                            checked={selectedOption === 'business'}
                            onChange={handleOptionChange}
                        />
                        Yes
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="logo"
                            value="Logo"
                            checked={selectedOption === 'logo'}
                            onChange={handleOptionChange}
                        />
                        No
                    </label>
                </div>




                *////////////////////////////////////////////////////////////////////////*
                <button type="submit" className="mt-4">Submit</button>
            </form>
        </div>
    );
}

export default MyForm;
