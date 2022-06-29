import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Header";
import { checkout } from "../../redux/сartSlice";
import classes from "./CheckoutDisplay.module.css";

function CheckoutDisplay() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, localId } = useSelector(store => ({
    items: store.cart.items,
    localId: store.auth.localId
  }));

  useEffect(() => {
    if (!localId) {
      navigate('/auth');
    }
  }, [localId, navigate]);

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(checkout({
      localId: localId,
      items: items,
      ...Object.fromEntries(formData.entries()),
    }));
    navigate('/');
  }

  return (
    <div className={classes.checkout}>
    <h1>Please enter your information.</h1>
      <form className={classes.inputs} onSubmit={onCheckout}>
        <label>
          <div>First name:</div>
          <input type="text" name="firstName" required />
        </label>
        <label>
          <div>Last Name:</div>
          <input type="text" name="lastName" required />
        </label>
        <label>
          <div>Address:</div>
          <input type="text" name="address" required />
        </label>
        <label>
          <div>Phone:</div>
          <input type="text" name="phone" required />
        </label>

        <button>Complete the order</button>
      </form>
    </div>
  );
}

export default CheckoutDisplay;