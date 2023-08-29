import React, { useState, useEffect } from 'react';


function Search() {
    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await fetch('https://assignment-api.uspto.gov/documentation-trademark/#!/basicSearch/basicSearch');
    //             const jsonData = await response.json();
    //             setData(jsonData);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     }
    //
    //     fetchData();
    // }, []);
    //
    // return (
    //     <div className="App">
    //         <h1>API Data</h1>
    //         <ul>
    //             {data.map(item => (
    //                 <li key={item.id}>{item.name}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );

    useEffect(() => {
        fetch('https://assignment-api.uspto.gov/documentation-trademark/#!/basicSearch/basicSearch')
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
