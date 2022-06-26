import { useParams } from "react-router";
import { getProduct } from "../../data/products";
import CartButton from "../CartButton/CartButton";
import classes from "./ProductPage.module.css";
import wishlight from "../../assets/favourite.svg";

function ProductPage() {
  const params = useParams();
  const product = getProduct(params.productId);
  return (
    <>
      <div className={classes.ProductPage}>
        <div className={classes.images}>
          <img
            src={product.image}
            alt={product.title}
            className={classes.image}
          />
          <img
            src={product.image2}
            alt={product.title}
            className={classes.image}
          />
          <img
            src={product.image3}
            alt={product.title}
            className={classes.image}
          />
          <img
            src={product.image4}
            alt={product.title}
            className={classes.image}
          />
        </div>
        <div className={classes.section}>
          <h1 className={classes.title}>{product.title}</h1>
          <p className={classes.description}>{product.description}</p>
          <span className={classes.price}>{product.price}$</span>
          <div className={classes.buttons}>
            <CartButton productId={params.productId} />
            <img className={classes.svg} src={wishlight} alt="wishlight svg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
