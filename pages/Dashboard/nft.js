import React, { useState } from 'react'
import useSWR from 'swr'

// export async function getServerSideProps(context) {
    // const query = context.params
    // // OR
    // const query = context.query
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }

function NFT() {
    const [query, setQuery] = useState('');
    // const newQuery = query.toLoweCase().replace(/\xyx$/)
    const url = `https://api.opensea.io/api/v1/assets?collection=${query}`;

    // fetcher for SWR
    const fetchData = async (...args) => {
        return await fetch(...args).then(res => res.json());
    }

    const { data, isValidating, error } = useSWR(url, fetchData);

    if(isValidating) { return <h1>Loading...</h1> }
    if(error) { return <h1>Error :(</h1>}

    return (
        <div>
            <h1>NFT item</h1>
            {/* {console.log(data)} */}
        </div>
    )
}

export default NFT;
