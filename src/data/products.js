import productImage from "../assets/WomenList.jpg";

const products = [
  {
    image: productImage,
    productId: "verasage",
    title: "Versage",
    price: 1250,
  },
  {
    image: productImage,
    productId: "balenciaga",
    title: "lorem",
    price: 120,
  },
  {
    image: productImage,
    productId: "jdcnkc",
    title: "calkl",
    price: 150,
  },
  {
    image: productImage,
    productId: "rbcdk",
    title: "calkl",
    price: 150,
  },
];

export function getProducts() {
  return products;
}
