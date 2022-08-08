import { NavLink } from "react-router-dom";

import classes from "./Header.module.css"

import logo from "../assets/images/header-logo.png";

const Header = () => {
  return (
    <div className={classes["top-bar"]}>
      <div className={classes["head-logo"]}><img src={logo} alt=""/></div>
      <NavLink to="/" className={classes.link}>
        Home
      </NavLink>
    </div>
  );
};
export default Header;
