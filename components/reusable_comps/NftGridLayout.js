import React from 'react'

function NftGridLayout({ children }) {
    return (
        <div className="flex flex-col md:flex-row flex-wrap md:max-w-1/3 justify-center items-center">
            {children}
        </div>
    )
}

export default NftGridLayout
