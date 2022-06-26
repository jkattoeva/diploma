import Header from "../components/Header/Header";
import image from "../assets/headerImage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../data/products";
import { Link, useNavigate } from "react-router-dom";
import { checkout } from "../redux/сartSlice";
import classes from "./Checkout.module.css";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(store => store.cart.items);
  const products = getProducts();

  let total = 0;
  let output = products
    .filter(product => items[product.productId])
    .map(product => {
      total += product.price * items[product.productId];

      return (
        <div>
          <Link to="">{product.title}</Link> {items[product.productId]} ${product.price * items[product.productId]}
        </div>
      );
    });

  if (!output) {
    output = "No items in the cart.";
  }

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const order = { items: items, ...Object.fromEntries(formData.entries()) };
    dispatch(checkout(order));
    navigate('/');
  }

  return (
    <div className={classes.Checkout}>
      <Header
        title="Checkout"
        image={image}>
        Please enter your information.
      </Header>
      <div>
        {output}
        <hr />
        Total: ${total}

        <form onSubmit={onCheckout} className={classes.inputs}>
          <label>
            First name: <br/>
            <input type="text" name="firstName" required />
          </label>
          <label>
            Last name:<br/>
            <input type="text" name="lastName" required />
          </label>
          <label>
            Address:<br/>
            <input type="text" name="address" required />
          </label>
          <label>
            Phone:<br/>
            <input type="text" name="phone" required />
          </label>

          <button className={classes.btn}>Complete the order</button>
        </form>

      </div>
    </div>
  );
}

export default Checkout;