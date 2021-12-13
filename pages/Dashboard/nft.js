import React from 'react'
import useSWR from 'swr'
import axios from 'axios';

function NFT() {
    // const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const url = 'https://api.opensea.io/api/v1/assets?collection=lilbabyapeclub';

    const fetchData = async (...args) => {
        return await fetch(...args).then(res => res.json());
    }

    const { data, isValidating, error } = useSWR(url, fetchData);

    if(isValidating) { return <h1>Loading...</h1> }

    return (
        <div>
            {console.log(data)}
        </div>
    )
}

export default NFT;
