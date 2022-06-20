import Header from "../components/Header/Header";
import shoeImage from "../assets/headerImage1.jpg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";
import Section from "../components/Section/Section";
function Home() {
  return (
    <>
    <Header title="Welcome to our FARFETCH shoes" image={shoeImage}>

    A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture
    </Header>

    <Section />

    <CategoryList categories={getCategories()}/>
    </>
  );
}
export default Home;