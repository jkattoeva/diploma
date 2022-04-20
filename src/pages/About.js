import "./About.css";
import Header from "../components/Header/Header";
import headerImage from "../assets/about.jpg";

function Instagram() {
  return (
    <article>
         <>
    <Header title="We are the best shoes store in KG"
     image={headerImage}>
    Additionally, fashion has often dictated many design elements, such as whether shoes have very high heels or flat ones. Contemporary footwear varies widely in style, complexity and cost. 
    </Header>
    </>
      <div className="List">
      <ul>
        <li>High quality</li>
        <li>Max comfort</li>
        <li>Extraordinary style</li>
      </ul>
      <ul>
        <li>More lightness</li>
        <li>Big choices</li>
        <li>Low price</li>
      </ul>
      </div>
    </article>
  );
}
 export default Instagram;