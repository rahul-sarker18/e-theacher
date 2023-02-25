import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Context/Usercontext";

const MyPost = () => {
    const {user} = useContext(AuthContext)
    const email = user.email
  const { data = [], isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const result = await fetch(`http://localhost:5000/mypost/?email=${email}`);
      const data = await result.json();
      return data;
    },
  });
  console.log(data);
  return <div>MyPost</div>;
};

export default MyPost;
