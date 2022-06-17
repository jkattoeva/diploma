import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";
import Search from "../../assets/Profile.svg";
import Cart from "../../assets/Cart.svg";
import Favourite from "../../assets/favourite.svg";

function Nav () {
  return (
    <div className={classes.Nav}>
    <ul className={classes.firstUl}>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/products">Products</NavItem>
        <NavItem url="/about">About</NavItem>
      </ul>
      <ul className={classes.lastUl}>
      <NavItem url="/signup"><img src={Search} alt="search"/></NavItem>
      <NavItem url="/cart"><img src={Cart} alt="cart"/></NavItem>
      <NavItem url="/favourite"><img src={Favourite} alt="favourite"/></NavItem>
     </ul>
    </div>
  );
};

export default Nav;