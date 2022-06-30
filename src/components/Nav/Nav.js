import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";
import signin from "../../assets/Profile.svg";
import signout from "../../assets/signout.svg";
import Favourite from "../../assets/favourite.svg";
import CartLink from "../CartLink.js/CartLink";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import history from "../../assets/history.svg";

function Nav() {
  const isAuthenticated = useSelector((store) => store.auth.idToken !== null);

  return (
    <ul className={classes.Nav}>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/products">Products</NavItem>
      <NavItem url="/about">About</NavItem>
      <NavLink to="/cart" className={classes.CartLink}><CartLink /></NavLink>
      <NavItem url="/favourite">
        <img src={Favourite} alt="favourite" />
      </NavItem>
      {isAuthenticated ? <NavItem url="/signout"><img src={signout} alt="signin" /></NavItem> : null}
      {!isAuthenticated ? <NavItem url="/auth"><img src={signin} alt="signout" /></NavItem> : null}
      <NavItem url="/history"><img src={history} alt="history"/></NavItem>
    </ul>
  );
}

export default Nav;
