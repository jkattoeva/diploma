import "./Nav.css";
import Logo from "../ui/Logo/Logo"
import searchIcon from "../../assets/search.jpg";
import NavItem from "./NavItem/NavItem";

function Nav () {
  return (
    <nav className="Nav">
      <div className="container">
      <Logo />
        <ul className="ul">
        <NavItem url="/">Home</NavItem>
        <NavItem url="/products">Products</NavItem>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/signup">Sign up</NavItem>
        </ul>
        <ul>
          <NavItem url="search"><img src={searchIcon} alt="search"/></NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;