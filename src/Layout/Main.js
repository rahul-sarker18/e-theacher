import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Header from "../Components/Shared/Header";
import UseTitle from "../Components/UseTitle/UseTitle";

const Main = () => {
  UseTitle('')
  return (
    <div>
      <Header></Header>
      <div style={{minHeight:'100vh'}}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
