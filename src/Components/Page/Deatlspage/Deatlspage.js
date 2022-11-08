import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Deatlspage = () => {
  const [rating, setrating] = useState(false);

  const { _id, name, img, title, price } = useLoaderData();

  return (
    <div className="max-w-xs mx-auto my-14 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-100">{title}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex text-xl">
            Price: $ <h3 className="text-orange-700">{price}</h3>
          </div>

          <div className="rating" onClick={() => setrating(!rating)}>
            <input
              type="radio"
              name="rating"
              className={`mask mask-star-2 ${rating && "bg-orange-400"}`}
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link to={`/revewAdd/${_id}`}>
          <button
            type="button"
            className="flex items-center justify-center w-1/2 p-3 font-semibold tracking-wide rounded-md dark:bg-blue-400 dark:text-gray-900"
          >
            Revew
          </button>
          </Link>
          <div>fff</div>
        </div>
      </div>
    </div>
  );
};

export default Deatlspage;
