import categoryImage from "../assets/categories.jpg";



const categories = [
  {
    categoryId: "verasage",
    title: "Medusa Aevitas Platfrom Pumps",
    image: categoryImage,
    description: "Обувь — изделие для предохранения ног от внешних воздействий и несущее утилитарные и эстетические функции[1]."
  },
  {
    categoryId: "balenciaga",
    title: "Medusa Biggie Platform Mules",
    image: categoryImage,
    description: "Обувь — изделие для предохранения ног от внешних воздействий и несущее утилитарные и эстетические функции[1]."

  },
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