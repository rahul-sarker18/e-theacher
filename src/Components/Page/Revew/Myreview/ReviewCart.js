import React from "react";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";


const ReviewCart = ({ review, handeldelet, handeledit, handeleditId }) => {
  const { name, userImg, text, _id, date } = review;
  return (
    <div>
      <section className="dark:bg-gray-800  dark:text-gray-100">
        <div className="container  2xl:text-left lg:text-left xl:text-left text-center mx-auto flex flex-col justify-center px-4 py-8  md:p-8">
          <div className="divide-y divide-gray-700  ">
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0 2xl:flex xl:flex lg:flex 2xl:justify-between xl:justify-between lg:justify-between  justify-between">
              <div className="font-semibold md:col-span-5">
                <div>
                  <p>{date}</p>
                </div>
                <div>
                  <img
                    className="w-[80px] mx-auto 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 rounded-full"
                    src={userImg}
                    alt=""
                  />
                </div>
              </div>
              <div className="md:pl-0 md:col-span-7">
                <h1 className="my-2">
                  <span className="text-amber-500">Service Name:</span> {name}
                </h1>
                <h1 className="my-2 mt-4">
                  <span className="text-green-500">Review :</span> {text}
                </h1>
              </div>
              <div className="2xl:block xl:block lg:block mx-0 flex md:ml-60 justify-center gap-4">
                {/* mpdal s */}
                <div>
                  <label
                    htmlFor="my-modal-4"
                    onClick={() => handeleditId(_id)}
                    className="btn btn-primary 2xl:block xl:block lg:block my-2"
                  >
                    <h1 className="flex gap-3 mt-3">
                      <AiFillEdit /> edit review
                    </h1>
                  </label>

                  <input
                    type="checkbox"
                    id="my-modal-4"
                    className="modal-toggle"
                  />
                  <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                      <form onSubmit={handeledit}>
                        <input
                          type="text"
                          name="text"
                          placeholder="Type here"
                          className="input input-bordered input-secondary w-full max-w-xs"
                        />
                        <button className="btn btn-secondary">Submite</button>
                      </form>
                    </label>
                  </label>
                </div>
                {/* mpdal e */}

                <button
                  onClick={() => handeldelet(_id)}
                  className="btn btn-secondary  2xl:block xl:block lg:block my-2"
                >
                  <h1 className="flex gap-3">
                    <AiOutlineDelete />
                    delete
                  </h1>
                </button>
              </div>
            </div>
            <p className="border"></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewCart;
