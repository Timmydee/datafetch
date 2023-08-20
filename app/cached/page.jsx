// Data are cached so it doesnot have to be called from the data source on every request

import React from 'react'

async function getData() {
    const res = await fetch (`https://fakestoreapi.com/products`, {
        cache: 'force-cache'
    })

    
}

const page = () => {
  return (
    <div>

    </div>
  )
}

export default page