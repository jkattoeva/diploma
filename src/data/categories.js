import womenCategory from "../assets/forWomen2.jpg";
import menCategory from "../assets/forMen.jpg";
import accesoriesCategory from "../assets/accesoriesCategory.jpg"



const categories = [
  {
    categoryId: "women",
    title: "For Women",
    image: womenCategory,
    description: "Обувь — изделие для предохранения ног от внешних воздействий и несущее утилитарные и эстетические функции."
  },
  {
    categoryId: "men",
    title: " For Men ",
    image: menCategory,
    description: "Обувь — изделие для предохранения ног от внешних воздействий и несущее утилитарные и эстетические функции."
  },
  {
    categoryId: "accessories",
    title: "accessories",
    image: accesoriesCategory,
    description: "Обувь — изделие для предохранения ног от внешних воздействий и несущее утилитарные и эстетические функции."

  }
];


export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category => category.categoryId === categoryId
    )
  ];
}