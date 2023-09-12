import React, { useState } from 'react';
import axios from 'axios';
export default function Resources()  {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://bulkdata.uspto.gov/BDSS-API-SWAGGER/search${query}`);
            setResults(response.data.results); // Adjust the API URL and data structure accordingly
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {results.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
}






