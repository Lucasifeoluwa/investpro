import "./navbar.scss";
import { NavLink } from "react-router-dom";

function NavBar(): JSX.Element {
  return (
    <div className="navbar">
      <div className="first">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          investorpro
        </NavLink>
      </div>
      <div className="second">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "items")}
        >
          About us
        </NavLink>
        <NavLink
          to="/wageadvance"
          className={({ isActive }) => (isActive ? "active" : "items")}
        >
          Wage Advance
        </NavLink>
        <NavLink
          to="/billsplit"
          className={({ isActive }) => (isActive ? "active" : "items")}
        >
          Bill Split
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? "active" : "items")}
        >
          FAQ'S
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "items")}
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
