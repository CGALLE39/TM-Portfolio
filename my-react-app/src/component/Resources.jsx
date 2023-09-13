import React, { useState } from 'react';
// src/components/TrademarkSearch.js
import axios from 'axios';

function TrademarkSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://www.tmdn.org/tmview/v2/search?term=${searchTerm}`);
            setSearchResults(response.data.response || []);
        } catch (error) {
            console.error('Error fetching trademark data:', error);
        }
    };

    return (
        <div>
            <h1>Trademark Search</h1>
            <input
                type="text"
                placeholder="Enter a trademark name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {searchResults.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default TrademarkSearch;
