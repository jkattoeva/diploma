import "./pages.css";
import Header from "../components/Header/Header";
import headerImage from "../assets/women.jpg";
import ProductList from "../components/ProductList/ProductList";
import productImage from "../assets/WomenList.jpg";


function Women() {
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
      <Header 
       title="You're find the best shoes for womens"
       image={headerImage}>
        Additionally, fashion has often dictated many design elements, such as
        whether shoes have very high heels or flat ones.
      </Header>

      <ProductList  products={products} />
    </>
  );
}
export default Women;
