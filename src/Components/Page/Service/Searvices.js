import React, { useEffect, useState } from 'react';
import UseTitle from '../../UseTitle/UseTitle';
import SearvicesCart from './SearvicesCart';

const Searvices = () => {
    UseTitle('services')

    const [api , setapi] = useState([]);
 
    const [size, setSize] = useState(6);
    const [page, setPage] = useState(0);
    const [count, setcount] = useState(1);

    const pages = Math.ceil(count / 6);

    useEffect(() => {
      fetch(`http://localhost:5000/searvicess?page=${page}&size=${size}`)
        .then((res) => res.json())
        .then((data) => {
          setapi(data.product)
          setcount(data.count)
          console.log(data);
        });
    }, [page , size]);

   
    return (
      <div>
        <div className=" justify-center  md:grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-5 my-6">
          {api?.map((ser) => (
            <SearvicesCart service={ser} key={ser._id}></SearvicesCart>
          ))}
        </div>

        <div>
          <div className="flex justify-center space-x-1 text-gray-100 mb-6">
            <button
              title="previous"
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {[...Array(pages)].map((countNumber, i) => (
              <button
              onClick={()=>setPage(i)}
                type="button"
                className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-900 border-gray-800"
                title={`page ${i }`}
              >
                <span
                  className={
                    page === i  &&
                    "text-width bg-red-900 inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-900 border-gray-800"
                  }
                >
                  {i}
                </span>
              </button>
            ))}

            <button
              title="next"
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Searvices;