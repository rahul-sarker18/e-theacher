import React from "react";
import { Link } from "react-router-dom";

const ServCart = ({ data }) => {

  const { name, img, _id, title, price } = data;

  return (
    <div className="max-w-xs mx-auto rounded-md  justify-center shadow-lg shadow-cyan-500/50 my-3 items-center 2xl:ml-10 lg:ml-10 xl:ml-10  bg-gray-900 text-gray-100">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="text-gray-100">
            {title.length === 100 ? title : title.slice(0, 100) + "..."}
          </p>
        </div>
        <div className="flex text-xl -my-4 ">
          <h1 className="-my-4">
            Price: $ <span className="text-orange-600">{price}</span>
          </h1>
        </div>
        <Link to={`/detels/${_id}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-400 text-gray-900"
          >
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServCart;
