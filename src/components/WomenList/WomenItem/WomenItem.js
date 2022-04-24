import { Link } from "react-router-dom";
import classes from "./WomenItem.module.css";


function WomenItem( { womens } ) {
  return ( 
    <div className={classes.WomenItem}>
      <img src={womens.image} />
      <div>
        <Link to={womens.path}>{womens.title}</Link>
        <div className={classes.price}>${womens.price}</div>
      </div>
    </div>
   );
}

export default WomenItem;