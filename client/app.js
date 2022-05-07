import React from "react";
import { NavLink } from "react-router-dom";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <NavLink to={"/"}> Home </NavLink>
      <NavLink to={"/user/profile"}></NavLink>
      <Routes />
    </div>
  );
};

export default App;
