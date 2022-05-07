import classes from "./Nav.module.css";
import Logo from "../ui/Logo/Logo"
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
        <NavToggle />
      </div>
    </nav>
  );
};

export default Nav;