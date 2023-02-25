import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Usercontext";
import UseTitle from "../../UseTitle/UseTitle";

const AddServices = () => {
  const {user} = useContext(AuthContext)
  UseTitle("addServices");
  const navigate = useNavigate();

  console.log(user.email);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const apikey = "95ede757551f3afc03649eb34693d691";

  const handeladdservices = (data) => {
    const img = data.image[0];
    const name = data.name;

    const price = data.price;
    const title = data.title;
    
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${apikey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const uu = imageData.data.url;
        console.log(imageData);
        const items = {
          name,
          img: uu,
          price,
          email: user.email,
          title,
        };
        if (imageData.success) {
          fetch("https://server-11-rahul-sarker18.vercel.app/searvices", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(items),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                navigate("/services");
                return toast.success("Post completed successfully!!");
              }
            });
        }
      });
  };

  // const handeladdservices = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const imgurl = form.imgurl.value;
  //   const price = form.price.value;
  //   const title = form.title.value;

  //   console.log("image", imgurl);

  //   const items = {
  //     name,
  //     img: imgurl,
  //     price,
  //     title,
  //   };

  //   // fetch("https://server-11-rahul-sarker18.vercel.app/searvices", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "content-type": "application/json",
  //   //   },
  //   //   body: JSON.stringify(items),
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     if (data.acknowledged){
  //   //         form.reset();
  //   //         navigate('/services')
  //   //         return toast.success('Post completed successfully!!')
  //   //     }
  //   //   });
  // };

  return (
    <div>
      <div className="w-full max-w-md p-8 mb-4 mx-auto my-6 shadow-lg shadow-blue-500/50  space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">Add Services</h1>
        <form
          onSubmit={handleSubmit(handeladdservices)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-gray-400">
              name *
            </label>
            <input
              type="text"
              {...register("name", { required: "please type name" })}
              id="name"
              placeholder="Type name"
              className="input input-bordered input-primary w-full "
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="imglink" className="block dark:text-gray-400">
              Upolde Img *
            </label>

            <input
              id="imglink"
              type="file"
              {...register("image", { required: "please upolde image" })}
              placeholder="Type  Img url"
              className="file-input file-input-bordered file-input-primary w-full "
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="price" className="block dark:text-gray-400">
              Price *
            </label>
            <input
              type="text"
              {...register("price", { required: "please make price" })}
              id="price"
              placeholder="Type price"
              className="input input-bordered input-primary w-full "
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="texaria" className="block dark:text-gray-400">
              Title *
            </label>

            <textarea
              className="textarea input-primary w-full  "
              placeholder="title"
              {...register("title", { required: "please make title" })}
            ></textarea>
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          <button className="block w-full p-3 text-center rounded-sm btn btn-outline btn-warning">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
