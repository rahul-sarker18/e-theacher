import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../../Context/Usercontext";
import Allreviews from "./Allreviews";
import toast from "react-hot-toast";
import UseTitle from "../../UseTitle/UseTitle";

const Deatlspage = () => {
  const { user } = useContext(AuthContext);
  const [rating, setrating] = useState(false);
  const [s, sets] = useState(false);
  const [reviewdata, setreviewdata] = useState([]);
  const { _id, name, img, title, price } = useLoaderData();
UseTitle(`detels/${_id}`)
  // post id in server
  useEffect(() => {
    fetch(`http://localhost:5000/review/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setreviewdata(data);
        sets();
      });
  }, [_id, s]);

  // reviiew btn func
  const handelreview = (e) => {
    sets(true);
    e.preventDefault();
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
        if (data.acknowledged) {
          sets(true);
          e.target.reset();
          return toast.success("Thanks for the Review!");
        }
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

      {reviewdata.map((rev) => (
        <Allreviews key={rev._id} allrevw={rev}></Allreviews>
      ))}

      {/* revew end */}

      <div className="my-7">
        <h1 className="text-2xl items-center text-center font-bold ">
          You can Review
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
            placeholder="review text"
          ></textarea>

          {user?.uid ? (
            <button className={`btn btn-outline btn-secondary`}>
              add review
            </button>
          ) : (
            <Link to="/login">
              <button className={`btn btn-outline btn-secondary`}>
                add review
              </button>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default Deatlspage;
