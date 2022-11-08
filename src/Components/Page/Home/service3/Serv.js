import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServCart from "./ServCart";

const Serv = () => {
  const [api, setapi] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/searvices?lemet=3`)
      .then((res) => res.json())
      .then((data) => setapi(data));
  }, []);
  return (
    <div className="my-6">
      <div className="grid grid-cols-3 my-4 ">
        {api.map((ser) => (
          <ServCart key={ser._id} data={ser}></ServCart>
        ))}
      </div>

      <div className="justify-center text-center  mx-auto shadow-lg  mb-24 items-center w-36">
        <Link  to="/services">
          <button className="btn btn-secondary shadow-orange-800-500/50">All Services</button>
        </Link>
      </div>
    </div>
  );
};

export default Serv;
