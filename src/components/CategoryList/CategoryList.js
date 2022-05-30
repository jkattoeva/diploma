import CategoryItem from "./CategoryItem/CategoryItem";
import classes from "./CategoryList.module.css";

function CategoryList({ categories }) {

  const CategoryItems = categories.map(category => (
    <CategoryItem key={category.categoryId} category={category} />
    
  ));

  return  (
    <div className={classes.CategoryList}>
    {CategoryItems}
    </div>
  );
};


export default CategoryList;
