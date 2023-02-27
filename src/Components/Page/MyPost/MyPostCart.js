import React from 'react';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';

const MyPostCart = ({post , handeldelet}) => {
 
  const {img, price , name , email , _id} = post
    return (
        <div>
            <div>
      <section className="bg-gray-800  text-gray-100">
        <div className="container  2xl:text-left lg:text-left xl:text-left text-center mx-auto flex flex-col justify-center px-4 py-8  md:p-8">
          <div className="divide-y divide-gray-700  ">
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0 2xl:flex xl:flex lg:flex 2xl:justify-between xl:justify-between lg:justify-between  justify-between">
              <div className="font-semibold md:col-span-5">
                <div>
                  <p>{name}</p>
                </div>
                <div>
                  <img
                    className="w-[80px] h-[80px] mx-auto 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 rounded-full"
                    src={img}
                    alt=""
                  />
                </div>
              </div>
              <div className="md:pl-0 md:col-span-7">
                <h1 className="my-2">
                  <span className="text-amber-500">Service Price: </span> {price} $
                </h1>
                <h1 className="my-2 mt-4">
                  <span className="text-green-500">Email : </span>{email}
                </h1>
              </div>
              <div className="2xl:block xl:block lg:block mx-0 flex md:ml-60 justify-center gap-4">
                {/* mpdal s */}
                <div>
                  <label
                    htmlFor="my-modal-4"
                    // onClick={() => handeleditId(_id)}
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
                      <form 
                    //   onSubmit={handeledit}
                      >
                       <h1 className='text-red-500 font-bold'>Edit system coming soon !!</h1>
                       
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
        </div>
    );
};

export default MyPostCart;