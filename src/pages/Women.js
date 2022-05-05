import "./pages.css";
import Header from "../components/Header/Header";
import headerImage from "../assets/women.jpg";
import ProductList from "../components/ProductList/ProductList";
import versageBratz from "../assets/versagebratz.jpg";
import versageMedusa from "../assets/versage.jpg";
import versageSandals from "../assets/versageSandals.jpg";
import nBalanceNergize from "../assets/nBalanceNergize.jpg";
import nBalance990 from "../assets/nBalance990.jpg";
import nBalance847v4 from "../assets/nBalance847v4.jpg";
import { getProducts } from "../data/products";


function Women() {
  const products = {
    versagebratz: {
      image: versageBratz,
      path: "/",
      title: "Medusa Aevitas Platfrom Pumps",
      price: 1250,
    },
    versageMedusa: {
      image: versageMedusa,
      path: "/",
      title: "Medusa Biggie Platform Mules",
      price: 120,
    },
    versage: {
      image: versageSandals,
      path: "/",
      title: "Greca Maze Platform Sandals",
      price: 150,
    },
    newBalanceNergize: {
      image: nBalanceNergize,
      path: "/",
      title: " NB Nergize Sport",
      price: 150,
    },
    newBalance990: {
      image: nBalance990,
      path: "/",
      title: "USA 990v5 Core",
      price: 150,
    },
    newBalace847v4: {
      image: nBalance847v4,
      path: "/",
      title: "847v4",
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


      <ProductList products={getProducts()} />  
        </>
  );
}
export default Women;
