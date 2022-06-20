import "./pages.css";
import Header from "../components/Header/Header";
import headerImage from "../assets/headerImage3.jpg";
import { getProducts } from "../data/products";
import ProductList from "../components/ProductList/ProductList";

function Products() {

  return (
    <>
    <Header title="You're find something for yourself "
     image={headerImage}>
    Additionally, fashion has often dictated many design elements, such as whether shoes have very high heels or flat ones. Contemporary footwear varies widely in style, complexity and cost. 
    </Header>
    

    <ProductList products={getProducts()} />
    </>
    
  );
}


 export default Products;