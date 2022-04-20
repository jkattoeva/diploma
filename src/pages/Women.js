import "./pages.css";
import Header from "../components/Header/Header";
import headerImage from "../assets/women.jpg";
import 

function Women() {

  const womens = {};


  return (
    <>
    <Header title="You're find the best shoes for womens"
     image={headerImage}>
    Additionally, fashion has often dictated many design elements, such as whether shoes have very high heels or flat ones. Contemporary footwear varies widely in style, complexity and cost. 
    </Header>

    <WomenList womens={womens}/>    
    </>
  );
}
 export default Women; 