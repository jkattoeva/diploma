import { Link } from "react-router-dom";
import { decrement, increment, remove } from "../../redux/сartSlice";
import { getProducts } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartDisplay.module.css";


function CartDisplay() {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const products = getProducts();

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      total += product.price * items[product.productId];

      return (
        <div className={classes.CartList}>
          <img src={product.image} alt={product.title} className={classes.image} />
          <Link className={classes.a} to="">{product.title}</Link> 
          {items[product.productId]}
          
          <button onClick={() => dispatch(decrement(product.productId))}>-</button>
          <div className={classes.prices}> $
          {product.price * items[product.productId]}
          </div>
          <button onClick={() => dispatch(increment(product.productId))}>+</button>
          <button onClick={() => dispatch(remove(product.productId))}>Delete</button>
        </div>
      );
    });

  if (!output.length) {
    output = "No items in the cart.";
  }

  return (
    <>
      <div>
        {output}
        <hr />
        <div className={classes.total}>Total: ${total}</div>
        <Link className={classes.checkout} to="/checkout"><button className={classes.buttons}>CheckOut</button></Link>
      </div>
    </>
  );
}

export default CartDisplay;