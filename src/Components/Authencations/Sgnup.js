import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {updateProfile} from "firebase/auth"
import { AuthContext } from "../Context/Usercontext";
import { FcGoogle } from "react-icons/fc";
import UseTitle from "../UseTitle/UseTitle";

const Sgnup = () => {
  UseTitle('signup')
  const {auth , signupEmail , signupgoogle} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const  from = location.state?.from?.pathname || "/";

//sign up email and password fild
  const handelsignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    signupEmail(email, password)
      .then((res) => {
        const user = res.user;

        fetch(`https://e-theacher-server.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user?.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
          });

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "https://i.ibb.co/ZJnwZhP/no.png",
        });
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //google

  const handelgoogle = () => {
    signupgoogle()
      .then((res) => {
        const user = res?.user;
        fetch(`https://e-theacher-server.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user?.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
          });

        navigate(from, { replace: true });
      })
      .catch((e) => {
      
      });
  };

  return (
    <div className="w-full max-w-md p-8 mx-auto my-6 shadow-lg shadow-blue-500/50  space-y-3 rounded-xl bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold text-center">Sign up</h1>
      <form
        onSubmit={handelsignup}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block text-gray-400">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block text-gray-400">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-gray-400">
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
          />
        </div>
        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-blue-400">
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          aria-label="Log in with Google"
          onClick={handelgoogle}
          className="p-3 text-4xl rounded-sm"
        >
          <FcGoogle className="hover:border-2 hover:rounded-sm" />
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 text-gray-400">
        Have an account?
        <Link
          to="/login"
          rel="noopener noreferrer"
          href="#"
          className="underline text-gray-100"
        >
          log in
        </Link>
      </p>
    </div>
  );
};

export default Sgnup;
