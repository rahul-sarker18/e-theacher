import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../Authencations/Login";
import Signup from "../Authencations/Sgnup";
import Error from "../Error/Error";
import AddServices from "../Page/AddServices/AddServices";
import Bolage from "../Page/Bolage/Bolage";
import Deatlspage from "../Page/Deatlspage/Deatlspage";
import Home from "../Page/Home/Home";
import MyPost from "../Page/MyPost/MyPost";
import Profile from "../Page/Profile/Profile";
import Myrevies from "../Page/Revew/Myreview/Myrevies";

import Searvices from "../Page/Service/Searvices";
import PrivateRout from "./PrivateRout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/services", element: <Searvices></Searvices> },
      { path: "/bolg", element: <Bolage /> },
      { path: "/profile", element: <Profile /> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/myreviews", element: <Myrevies /> },
      {
        path: "/addServices",
        element: (
          <PrivateRout>
            <AddServices />
          </PrivateRout>
        ),
      },
      {
        path: "/mypost",
        element: (
          <PrivateRout>
            <MyPost />
          </PrivateRout>
        ),
      },

      {
        path: "/detels/:id",
        element: <Deatlspage></Deatlspage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/searvices/${params.id}`),
      },
    ],
  },
  { path: "*", element: <Error></Error> },
]);