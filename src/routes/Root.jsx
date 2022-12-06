import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="wrapper">
<Header/>
          <div className="main"><Outlet /></div>  
          {/* any one get from children routes render it here */}
<Footer/>
    </div>
  );
};

export default Root;