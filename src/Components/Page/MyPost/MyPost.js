import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Usercontext";
import MyPostCart from "./MyPostCart";

const MyPost = () => {
    const {user} = useContext(AuthContext)
    const email = user.email
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const result = await fetch(
        `https://e-theacher-server.vercel.app/mypost/?email=${email}`
      );
      const data = await result.json();
      return data;
    },
  });
  const handeldelet = (id) => {
    const confirm = window.confirm("Do you really want to delete it?");
    if (confirm) {
    }
    if (confirm) {
      fetch(`https://e-theacher-server.vercel.app/delete/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            refetch();
            return toast.success("Delete completed successfully!!");
          }
        });
    }
  };
  return <div>{
    data.map(post => <MyPostCart key={post._id} post ={post} handeldelet ={handeldelet}></MyPostCart>)}
    {data.length === 0 && (
          <h2 className='text-red-700 text-center text-2xl my-16'>
            No Items for Post. Please: <Link to="/services" className='text-lime-300'>add more..</Link>
          </h2>
        )}
    </div>;
};

export default MyPost;
