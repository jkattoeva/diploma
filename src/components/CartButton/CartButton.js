import { useDispatch } from "react-redux";
import { add } from "../../redux/сartSlice";
import classes from "./CartButton.module.css";

export default function CartButton({ productId }) {
  const dispatch = useDispatch();

  function onAddToCart() {
    dispatch(add(productId));
  }

  return (
    <button className={classes.CartButton} onClick={onAddToCart}>Add to card</button>
  );
}