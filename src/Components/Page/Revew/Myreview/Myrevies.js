import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/Usercontext';
import ReviewCart from './ReviewCart';

const Myrevies = () => {
    const{user} = useContext(AuthContext);
    const [myrev , setmyrev] =useState([]);
    console.log(user?.email);

    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setmyrev(data);
      });
    },[user?.email])
    console.log(myrev);
    return (
        <div>

            <div className="my-16">
                {myrev.map(review => <ReviewCart key={review._id} review={review} ></ReviewCart>)}
            </div>
            
        </div>
    );
};

export default Myrevies;