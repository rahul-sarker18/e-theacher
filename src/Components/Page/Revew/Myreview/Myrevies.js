import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/Usercontext";
import UseTitle from "../../../UseTitle/UseTitle";
import ReviewCart from "./ReviewCart";

const Myrevies = () => {
  UseTitle("myreviews");
  const { user, signoutff } = useContext(AuthContext);
  const [myrev, setmyrev] = useState([]);
  const [refr, setRefr] = useState(false);
  const [ides, setides] = useState("");
 

  useEffect(() => {
    fetch(
      `https://server-11-rahul-sarker18.vercel.app/review?email=${user?.email}`,
      {
        headers: {
          authorizitan: `Baerer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return signoutff();
        }
        return res.json();
      })

      .then((data) => {
        setmyrev(data);
      });
  }, [user?.email, refr, signoutff]);

  //handeldelet
  const handeldelet = (id) => {
    const confirm = window.confirm("Do you really want to delete it?");

    if (confirm) {
      fetch(`https://server-11-rahul-sarker18.vercel.app/review/${id}`, {
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
        });
    }
  };

  const handeleditId = (id) => {
    setides(id);
  };

  //handeledit
  const handeledit = (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    fetch(`https://server-11-rahul-sarker18.vercel.app/review/${ides}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          setRefr(true);
          event.target.reset();
          return toast.success("Update completed successfully!!");
        }
      });
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

        {myrev.length === 0 && (
          <h2 className='text-red-700 text-center text-2xl'>
            No Items for Review. Please: <Link to="/services" className='text-lime-300'>add more..</Link>
          </h2>
        )}
      </div>
    </div>
  );
};

export default Myrevies;