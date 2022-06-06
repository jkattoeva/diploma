import { Link } from "react-router-dom";
import classes from "./CategoryItem.module.css";


function CategoryItem( { category } ) {
  return ( 
    <div className={classes.CategoryItem}>
      <Link to={"/categories/" + category.categoryId} ><img className={classes.image1} src={category.image} alt={category.title}/></Link>
        <Link to={"/categories/" + category.categoryId} className={classes.title}>{category.title}</Link>
    </div>
   );
}

export default CategoryItem;