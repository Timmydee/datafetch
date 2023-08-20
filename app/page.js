import React from 'react';

async function getData() {
  const res = await fetch(`https://fakestoreapi.com/products`);

  if (!res.ok) {
    throw new Error('Failed to fetch Data');
  }

  return res.json();
}

const page = async () => {
  const data = await getData();
  console.log(data); // Make sure data is an array of objects

  return (
    <div>
      <div>
        <h1>Happy</h1>
        {data?.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <h3>{item.description}</h3>
            <h3>{item.category}</h3>
            <h3>Rating: {item.rating.rate}</h3>
            <h3>Count: {item.rating.count}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;


