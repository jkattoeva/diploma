import Header from "../components/Header/Header";
import image from "../assets/headerImage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../data/products";
import { Link } from "react-router-dom";
import classes from "../components/PagesStyles/Cart.module.css";
import { decrement, increment, remove } from "../redux/сartSlice";


function Cart() {
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
          <div className={classes.prices}>{items[product.productId]} $
          {product.price * items[product.productId]}
          </div>
          <button onClick={() => dispatch(decrement(product.productId))}>-</button>
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
      <Header title="Your Shopping Cart" image={image}>
        Please review items in your cart.
      </Header>
      <div>
        {output}
        <hr />
        <div className={classes.total}>Total: ${total}</div>
        <Link className={classes.checkout} to="/checkout"><button className={classes.buttons}>CheckOut</button></Link>
      </div>
    </>
  );
}

export default Cart;
