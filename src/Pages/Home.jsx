import React from "react";
// import Sildebar from '../Components/Sildebar'
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <pre>
        sm : 640 <br />
        md: 768 <br />
        lg: 1023 <br />
        xl: 1280 <br />
        2xl: 1440
      </pre>
    </div>
  );
};

export default Home;
