import CategoryItem from "./ProductItem/CategoryItem";
import classes from "./CategoryList.module.css";

function CategoryList({ categories }) {

  const CategoryItems = categories.map(category => (
    // products[id].type === "women"?
    <CategoryItem key={category.categoryId} category={category} />
    
  ))

  return  (
    <div className={classes.CategoryList}>
    {CategoryItems}
    </div>
  );
};


export default CategoryList;
