import React from "react";
import "./navbar.scss";
import { ArrowForward } from "@mui/icons-material";

function NavBar(): JSX.Element {
  return (
    <div className="navbar">
      <div className="first">investorpro</div>
      <div className="second">
        <div className="items">About us</div>
        <div className="items">Wage Advance</div>
        <div className="items">Bill Split</div>
        <div className="items">Blog</div>
        <div className="items">FAQ's</div>
      </div>
      <div className="third">
        <span style={{ marginRight: 3 }}>Get started </span>
        <ArrowForward className="icon" />
      </div>
    </div>
  );
}

export default NavBar;
