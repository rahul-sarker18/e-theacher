import React, { useContext, useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/Usercontext";
import ReviewCart from "./ReviewCart";

const Myrevies = () => {
  const { user } = useContext(AuthContext);
  const [myrev, setmyrev] = useState([]);
  const [ides , setides] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setmyrev(data);
      });
  }, [user?.email]);

  //handeldelet
  const handeldelet = (id) => {
    const confirm = window.confirm("Do you really want to delete it?");

    if (confirm) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = myrev.filter((d) => d._id !== id);
            setmyrev(remaining);
            return toast.success("Delete completed successfully!!");
          }
          console.log(data);
        });
    }
  };
 
  const handeleditId=(id)=>{
    setides(id)
  }

  //handeledit
  const handeledit = ( event ) => {
    event.preventDefault();
    const text = event.target.text.value;
    // const id = ides;
    // console.log(id);
 
  
     fetch(`http://localhost:5000/review/${ides}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({text})
  })
    .then((res) => res.json())
    .then(data => {
      console.log(data);
    })

  };



  return (
    <div>
      <div className="my-16">
        {myrev.map((review) => (
          <ReviewCart
            key={review._id}
            review={review}
            handeledit={handeledit}
            handeldelet={handeldelet}
            handeleditId={handeleditId}
          ></ReviewCart>
        ))}
      </div>


     
    </div>
  );
};

export default Myrevies;