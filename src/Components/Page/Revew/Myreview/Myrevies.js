import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from "../../../Context/Usercontext";
import UseTitle from '../../../UseTitle/UseTitle';
import ReviewCart from "./ReviewCart";

const Myrevies = () => {
  UseTitle('myreviews')
  const { user , signoutff } = useContext(AuthContext);
  const [myrev, setmyrev] = useState([]);
  const  [refr , setRefr] = useState(false)
  const [ides , setides] = useState('');

  useEffect(() => {
    
    fetch(`http://localhost:5000/review?email=${user?.email}` , {
      headers:{
        authorizitan: `Baerer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          return signoutff()
        }
      return res.json()})

      .then((data) => {
        setmyrev(data);
      });
  }, [user?.email , refr ,signoutff]);

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
          };
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
     fetch(`http://localhost:5000/review/${ides}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({text})
  })
    .then((res) => res.json())
    .then(data => {
      if(data.matchedCount){
        setRefr(true)
        event.target.reset()
       return toast.success( 'Update completed successfully!!')
      
      }
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