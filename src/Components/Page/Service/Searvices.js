import React, { useEffect, useState } from 'react';
import SearvicesCart from './SearvicesCart';

const Searvices = () => {

    const [api , setapi] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/searvices').then(res => res.json())
        .then(data => setapi(data))
    },[])
   
    return (
        <div>
            <div className=' justify-center  md:grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-5 my-6'>
                {api.map(ser => <SearvicesCart service={ser} key={ser._id} ></SearvicesCart>)}
            </div>
        </div>
    );
};

export default Searvices;