import "./About.css";
import Header from "../components/Header/Header";
import headerImage from "../assets/headerImage2.jpg";

function About() {
  return (
    <article>
      <Header title="We are the best shoes store in KG" image={headerImage}>
        Additionally, fashion has often dictated many design elements, such as
        whether shoes have very high heels or flat ones. Contemporary footwear
        varies widely in style, complexity and cost.
      </Header>
    </article>
  );
}
export default About;
