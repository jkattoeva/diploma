import Header from "../components/Header/Header";
import shoeImage from "../assets/headerImage.jpg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";
function Home() {
  return (
    <>
    <Header title="Welcome to our FARFETCH shoes" image={shoeImage}>

    A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture
    </Header>

    <CategoryList categories={getCategories()}/>
    </>
  );
}
export default Home;