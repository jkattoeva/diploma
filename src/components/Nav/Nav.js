import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";
import Search from "../../assets/Profile.svg";
import Favourite from "../../assets/favourite.svg";
import CartLink from "../CartLink.js/CartLink";
import { useSelector } from "react-redux";

function Nav() {
  const isAuthenticated = useSelector((store) => store.auth.idToken !== null);
  
  return (
    <ul className={classes.Nav}>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/products">Products</NavItem>
      <NavItem url="/about">About</NavItem>
      <NavItem url="/signup">
        <img src={Search} alt="search" />
      </NavItem>
      <CartLink />
      <NavItem url="/favourite">
        <img src={Favourite} alt="favourite" />
      </NavItem>
      {isAuthenticated ? <NavItem url="/signout">Sign out</NavItem> : null}
      {!isAuthenticated ? <NavItem url="/auth">Sign in</NavItem> : null}
    </ul>
  );
}

export default Nav;
