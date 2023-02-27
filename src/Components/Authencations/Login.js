import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";
import { FcGoogle } from "react-icons/fc";
import UseTitle from '../UseTitle/UseTitle';

const Login = () => {
UseTitle('login')

  const { signinemail, signupgoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handellogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signinemail(email, password)
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

        navigate(from, { replace: true });
      })

      .catch((e) => {});
  };

  return (
    <div className="w-full max-w-md p-8 mx-auto my-6 shadow-lg shadow-blue-500/50  space-y-3 rounded-xl bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold text-center">Log in</h1>
      <form
        onSubmit={handellogin}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block text-gray-400">
            Email
          </label>
          <input
            required
            type="email"
            name="name"
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
          <div className="flex justify-end text-xs text-gray-400">
            <button type="Link"> Forgot Password?</button>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-blue-400">
          Log in
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
        Don't have an account?
        <Link
          to="/signup"
          rel="noopener noreferrer"
          className="underline text-gray-100"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;