import Header from "../components/Header/Header";
import headerImage from "../assets/shoe5.jpg";

function Home() {
  return (
    <>
    <Header title="Welcome to our shoes store"
     image={headerImage}>
    A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function. Though the human foot can adapt to varied terrains and climate conditions, it is still vulnerable to environmental hazards such as sharp rocks and temperature extremes, which shoes protect against. Some shoes are worn as safety equipment, such as steel-toe boots which are required footwear at industrial worksites.
    </Header>
    </>
  );
}
export default Home;