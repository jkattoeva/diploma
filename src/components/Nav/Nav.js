import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";
import Search from "../../assets/Profile.svg";
import Favourite from "../../assets/favourite.svg";
import CartLink from "../CartLink.js/CartLink";

function Nav () {
  return (
      <ul className={classes.Nav}>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/products">Products</NavItem>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/signup"><img src={Search} alt="search"/></NavItem>
        <CartLink />
        <NavItem url="/favourite"><img src={Favourite} alt="favourite"/></NavItem>
     </ul>
  );
};

export default Nav;