import "./Nav.css";
import Logo from "../ui/Logo/Logo"
import NavItem from "./NavItem/NavItem";

function Nav () {
  return (
    <nav className="Nav">
      <div className="container">
      <ul className="FirstUl">
        <NavItem url="/women">Women</NavItem>
        <NavItem url="/men">Men</NavItem>
        <NavItem url="/teenagers">Teenagers</NavItem>
        <NavItem url="/kids">Kids</NavItem>
      </ul>
      <Logo />
        <ul className="LastUl">
        <NavItem url="/">Home</NavItem>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/signup">Sign up</NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;