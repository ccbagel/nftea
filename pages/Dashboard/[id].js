import axios from 'axios';
import React from 'react'

function NFT() {
    return (
        <div>
            <h1>NFT item page</h1>
        </div>
    )
}

export default NFT;

export async function getServerSideProps(context) {
    const res = axios.get({
        baseURL: 'https://api.opensea.io/api/v1/assets',
        collection: context.query,
        limit: 10,
        offset: 0,
        order_direction: 'desc',
        api_key: process.env.NEXT_PUBLIC_API_KEY
    })
    .then(data => res.json())
    .then(console.log(context))


    return {
      props: {
          data
      }, // will be passed to the page component as props
    }
  }