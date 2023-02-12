import "./navbar.scss";
import { Link } from "react-router-dom";

import Home from "../../assets/home.png";
import Moon from "../../assets/moon.png";
import Grid from "../../assets/grid.png";
import Search from "../../assets/search.png";

import User from "../../assets/user.png";

import Notf from "../../assets/notification.png";
import Email from "../../assets/email.png";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkMode";

import { AuthContext } from "../../Context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="container">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Met Book.</span>
        </Link>
        <img src={Home} width="20px" height={"20px"} />
        {darkMode ? (
          <img src={Moon} width="20px" onClick={toggle} />
        ) : (
          <img src={User} width="20px" height={"20px"} onClick={toggle} />
        )}
        <img src={Grid} width="20px" height={"20px"} />
        <div className="search">
          <img src={Search} width="20px" height={"20px"} />

          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <img src={User} width="20px" height={"20px"} />
        <img src={Email} width="20px" height={"20px"} />
        <img src={Notf} width="20px" height={"20px"} />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
