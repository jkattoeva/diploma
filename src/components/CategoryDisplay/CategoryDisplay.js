import productImage from "../../assets/product1.jpg";
import classes from "./CategoryDisplay.module.css";
function CategoryDisplay() {
  return (
    <div className={classes.CategoryDisplay}>
      <div>
        <h1>Our products are relevant for everyone</h1>
        <p>You can order and get on and quality footwear products</p>
      </div>
    </div>
  );
}

export default CategoryDisplay;
