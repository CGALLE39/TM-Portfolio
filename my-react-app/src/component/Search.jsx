import React, { useState, useEffect } from 'react';


function Search() {

    useEffect(() => {
        fetch('https://bulkdata.uspto.gov/BDSS-API-SWAGGER/')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    },[])
    return (
        <div className='search'>
            <input type="text" placeholder='search here...' />
        </div>
    )
}

export default Search;
