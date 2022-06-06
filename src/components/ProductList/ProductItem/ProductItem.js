import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";


function ProductItem( { product } ) {
  return ( 
    <div className={classes.ProductItem}>
        <Link className={classes.hoverImage} to={"/products/" + product.productId}><img className={classes.img} src={product.image} alt="img"/> </Link>
        <Link className={classes.a} to={"/products/" + product.productId}>{product.title}</Link>
        <div className={classes.price}>${product.price}</div>
    </div>
   );
}

export default ProductItem;