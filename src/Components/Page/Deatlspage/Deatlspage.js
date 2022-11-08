import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../../Context/Usercontext";

const Deatlspage = () => {
  const { user } = useContext(AuthContext);
  const [rating, setrating] = useState(false);
  const [reviewdata, setreviewdata] = useState([]);
  const { _id, name, img, title, price } = useLoaderData();

  // post id in server
  useEffect(() => {
    fetch(`http://localhost:5000/review/?id=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [_id]);

  // reviiew btn func
  const handelreview = (e) => {
    e.preventDefault();
    console.log(e);
    const text = e.target.text.value;
    const reviewDetls = {
      name,
      email: user.email,
      userImg: user.photoURL,
      img,
      text,
      id: _id,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewDetls),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="max-w-lg hadow-lg shadow-cyan-500/50 mx-auto my-14 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <PhotoProvider>
          <PhotoView src={img}>
            <img
              src={img}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
            />
          </PhotoView>
        </PhotoProvider>
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
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-blue-400 dark:text-gray-900"
            >
              Bye now
            </button>
          </div>
        </div>
      </div>

      <div className="my-7">
        <h1 className="text-2xl items-center text-center font-bold ">
          Service Review{" "}
        </h1>
        <p className="w-4/5 mx-auto border border-rose-600"></p>
      </div>

      {/* revew all start */}
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <div className="divide-y divide-gray-700">
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Magni reprehenderit possimus debitis?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                autem eaque unde possimus quae.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* revew end */}

      <div className="my-7">
        <h1 className="text-2xl items-center text-center font-bold ">
          Service Review{" "}
        </h1>
        <p className="w-4/5 mx-auto border border-rose-600"></p>
      </div>
      <div className="my-6">
        <form
          onSubmit={handelreview}
          className="justify-center items-center mx-auto w-2/3  flex"
        >
          <textarea
            required
            name="text"
            className="textarea textarea-accent w-[350px]"
            placeholder="Bio"
          ></textarea>
          <button className={`btn btn-outline btn-secondary`}>Button</button>
        </form>
      </div>
    </div>
  );
};

export default Deatlspage;
