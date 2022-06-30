import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import icon from "../../assets/Cart.svg";
import classes from "./CartLink.module.css";

export default function CartLink() {
  const number = useSelector((store) => {
    return Object.values(store.cart.items).reduce(
      (sum, number) => sum + number,
      0
    );
  });

  return (
    <NavLink className={classes.CartLink} to="/cart">
      <img src={icon} alt="iconImage" />
      <div className={classes.Number}> {number}</div>
    </NavLink>
  );
}
