import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Components/router/MainRout";

function App() {
  return <div className="mx-auto 2xl:w-4/5  xl:w-4/5 lg:w-4/5 md:w-4/5 ">
    <RouterProvider router={router}></RouterProvider>
  </div>;
}

export default App;
