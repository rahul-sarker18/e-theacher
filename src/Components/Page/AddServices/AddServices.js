import React from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import UseTitle from "../../UseTitle/UseTitle";

const AddServices = () => {
  UseTitle('addServices')
    const navegate = useNavigate()
  const handeladdservices = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imgurl = form.imgurl.value;
    const price = form.price.value;
    const title = form.title.value;

    const items = {
      name,
      img: imgurl,
      price,
      title,
    };

    fetch("https://server-11-rahul-sarker18.vercel.app/searvices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged){
            form.reset();
            navegate('/services')
            return toast.success('Post completed successfully!!')
        } 
      });
  };

  return (
    <div>
      <div className="w-full max-w-md p-8 mx-auto my-6 shadow-lg shadow-blue-500/50  space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">AddServices</h1>
        <form
          onSubmit={handeladdservices}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-gray-400">
              name
            </label>
            <input
              type="text"
              required
              name="name"
              id="name"
              placeholder="Type name"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="imglink" className="block dark:text-gray-400">
              Img url
            </label>
            <input
              required
              id="imglink"
              type="text"
              name="imgurl"
              placeholder="Type  Img url"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="price" className="block dark:text-gray-400">
              Price
            </label>
            <input
              required
              type="text"
              name="price"
              id="price"
              placeholder="Type price"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="texaria" className="block dark:text-gray-400">
              Title
            </label>

            <textarea
              className="textarea textarea-secondary"
              placeholder="title"
              required
              name="title"
            ></textarea>
          </div>
          <button className="block w-full p-3 text-center rounded-sm btn btn-outline btn-warning">
            Submite
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
