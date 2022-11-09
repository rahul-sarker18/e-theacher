import React, { useContext } from "react";
import { AuthContext } from "../../Context/Usercontext";
import UseTitle from "../../UseTitle/UseTitle";

const Profile = () => {
  const { user } = useContext(AuthContext);
  UseTitle(`profilt/${user?.email}`)
  return (
    <div className="flex mx-auto my-14  shadow-lg shadow-cyan-500/60 flex-col justify-center max-w-xs p-6  rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
      <img
        src={user?.photoURL}
        alt=""
        className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">
            {user?.displayName}
          </h2>
          <p className="px-5 text-xs sm:text-base dark:text-gray-400">
           {user?.email}
          </p>
        </div>
        <div className="flex justify-center pt-2 space-x-4 align-center"></div>
      </div>
    </div>
  );
};

export default Profile;
