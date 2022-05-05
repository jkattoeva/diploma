import "./pages.css";
import Header from "../components/Header/Header";
import headerImage from "../assets/teenagers.jpg";
import ProductList from "../components/ProductList/ProductList";
import productImage from "../assets/WomenList.jpg";
import { getProducts } from "../data/products";

function Teenagers() {

  const products = {
    versage: {
      image: productImage,
      path: "/",
      title: "Versage",
      price: 1250,
    },
    louisvuiton: {
      image: productImage,
      path: "/",
      title: "lorem",
      price: 120,
    },
    balenciaga: {
      image: productImage,
      path: "/",
      title: "calkl",
      price: 150,
    },
    new: {
      image: productImage,
      path: "/",
      title: "calkl",
      price: 150,
    },
  };

  return (
    <>
    <Header title="You're find the best shoes for teenagers"
     image={headerImage}>
    Additionally, fashion has often dictated many design elements, such as whether shoes have very high heels or flat ones. Contemporary footwear varies widely in style, complexity and cost. 
    </Header>


    <ProductList products={getProducts()} />
    </>
  );
}
 export default Teenagers;