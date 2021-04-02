import React from "react";
import Logo from "../../assets/logo/logo.png";
import "../../assets/css/navbar.css";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <div className="navbar" onClick={handleClick}>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="navigation">
          <p>Home</p>
          <p>Artist</p>
        </div>
      </div>
    </>
  );
};
export default Navbar;
