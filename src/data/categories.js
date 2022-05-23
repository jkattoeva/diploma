import categoryImage from "../assets/categories.jpg";



const categories = [
  {
    categoryId: "women-shoes",
    title: "Women shoes",
    image: categoryImage,
    description: "Обувь — изделие для предохранения ног от внешних воздействий и несущее утилитарные и эстетические функции[1]."
  },
  {
    categoryId: "men-shoes",
    title: "Men shoes",
    image: categoryImage,
    description: "Обувь — изделие для предохранения ног от внешних воздействий и несущее утилитарные и эстетические функции[1]."
  },
  {
    categoryId: "accessouries",
    title: "accessories",
    image: categoryImage,
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