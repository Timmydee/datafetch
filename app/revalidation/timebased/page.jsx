// Time based Revalidation has to do with revalidating data after a period of time imagine yo are having to update livescores regularly (a better analogy will do)

import React from 'react'

async function getData() {
    const res = await fetch (`https://fakestoreapi.com/products`, {
        next: {revalidate: 36000}
    })

    
}

const page = () => {
  return (
    <div>

    </div>
  )
}

export default page