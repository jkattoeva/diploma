import classes from "./Nav.module.css";
import Logo from "../ui/Logo/Logo"
import searchIcon from "../../assets/search.jpg";
import NavItem from "./NavItem/NavItem";
import NavToggle from "./NavToggle/navToggle";

function Nav () {
  return (
    <nav className={classes.Nav}>
      <div className={classes.container}>
      <Logo />
        <ul className="ul">
        <NavItem url="/">Home</NavItem>
        <NavItem url="/products">Products</NavItem>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/signup">Sign up</NavItem>
        </ul>
        {/* <ul>
          <NavItem url="search"><img src={searchIcon} alt="search"/></NavItem>
        </ul> */}
        <NavToggle />
      </div>
    </nav>
  );
};

export default Nav;