import womenCategory from "../assets/womenCategory.jpg";
import menCategory from "../assets/menCategory.jpg";
import accesoriesCategory from "../assets/accesoriesCategory.jpg"



const categories = [
  {
    categoryId: "women-shoes",
    title: "Women shoes",
    image: womenCategory,
    description: "Обувь — изделие для предохранения ног от внешних воздействий и несущее утилитарные и эстетические функции[1]."
  },
  {
    categoryId: "men-shoes",
    title: "Men shoes",
    image: menCategory,
    description: "Обувь — изделие для предохранения ног от внешних воздействий и несущее утилитарные и эстетические функции[1]."
  },
  {
    categoryId: "accessories",
    title: "accessories",
    image: accesoriesCategory,
    description: "Обувь — изделие для предохранения ног от внешних воздействий и несущее утилитарные и эстетические функции[1]."

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