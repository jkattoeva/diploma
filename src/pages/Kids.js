import "./pages.css";
import Header from "../components/Header/Header";
import headerImage from "../assets/kids.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Kids() {

  return (
    <>
    <Header title="You're find the best shoes for kids"
     image={headerImage}>
    Additionally, fashion has often dictated many design elements, such as whether shoes have very high heels or flat ones. Contemporary footwear varies widely in style, complexity and cost. 
    </Header>

    <ProductList products={getProducts()} />
    </>
    
  );
}


 export default Kids;