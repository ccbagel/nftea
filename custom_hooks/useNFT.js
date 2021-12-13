// import React from 'react';
// import useSWR from 'swr';
// import fetchNFTs from '../services/openseaService';

// function useNFT(url, query) {
//     // format query
//     const formattedQuery = query.toLowerCase();

//     const fetchNFT = url => {
//         const res = axios.get({
//             method: 'GET',
//             url: url,
//             collection: formattedQuery,
//             limit: 1,
//             order_direction: "desc",
//             headers: {
//                 "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY
//             }
//         })



//         fetchNFTs()
//             .then()
//     }
//     return {
//         data
//     }
// }

// export default useNFT;