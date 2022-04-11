import "./Nav.css";
import Logo from "../ui/Logo/Logo"
import NavItem from "./NavItem/NavItem";

function Nav () {
  return (
    <nav className="Nav">
      <ul className="FirstUl">
        <NavItem url="/">Women</NavItem>
        <NavItem url="/">Men</NavItem>
        <NavItem url="/">Teenagers</NavItem>
        <NavItem url="/">Kids</NavItem>
      </ul>
      <Logo />
        <ul className="LastUl">
        <NavItem url="/">Sign up</NavItem>
        <NavItem url="/">Instagram</NavItem>
        </ul>
    </nav>
  );
};

export default Nav;