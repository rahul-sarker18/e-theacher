import React from "react";
import {MdReviews} from 'react-icons/md'
import {FcBusinessman} from 'react-icons/fc'

const Vegitor = () => {
  return (
    <div className=" text-center justify-center my-8">
      <div className=" rounded-xl  flex justify-between p-6 w-[100%] bg-black mx-auto">
        <div>
          <div >
            <h1 className="text-2xl font-bold">Total Review</h1>
           <div className="flex  mt-5  text-2xl text-center justify-center items-center">
           <MdReviews  className="text-orange-400 text-2xl" />
            <h1>104</h1>
           </div>
          </div>
        </div>
        <p className="border"></p>
        <div>
          <div>
            <h1 className="text-3xl font-bold">Total User</h1>
            <div className="flex justify-center items-center  text-center mt-5 text-2xl">
            <FcBusinessman className= " text-2xl text-orange-400"/>
            <h1>134</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vegitor;
