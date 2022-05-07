import Header from "../components/Header/Header";
import headerImage from "../assets/shoe5.jpg";

function Home() {
  return (
    <>
    <Header title="Welcome to our shoes store"
     image={headerImage}>
    A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture.
    </Header>
    </>
  );
}
export default Home;