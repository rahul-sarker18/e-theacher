import React from "react";
import { Link } from "react-router-dom";

const Baner = () => {
  return (
    <div
      className="hero min-h-screen my-6"
      style={{ backgroundImage: `url("https://i.ibb.co/tbB2vW2/tea.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 text-white">
            Welcome everyone. i am a teacher I teach all subjects. You can learn
            a lot from my website. This website has many quality services.
            Accept these services of yours.
          </p>
          <Link to="/services">
            <button className="btn btn-primary">services</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Baner;
