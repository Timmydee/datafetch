

import React from "react";
import Image from "next/image";

async function getData() {
  const res = await fetch(`https://fakestoreapi.com/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch Data");
  }

  return res.json();
}

const serverFetch = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-6">New Stock Alert</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow-md rounded-md transform hover:scale-105 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                  alt={item.title}
                  className="rounded-md"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.category}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 text-sm">
                    Rating: {item.rating.rate}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    Count: {item.rating.count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default serverFetch;


