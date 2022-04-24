import "./pages.css";
import Header from "../components/Header/Header";
import headerImage from "../assets/women.jpg";
import WomenList from "../components/WomenList/WomenList";
import womenImage from "../assets/WomenList.jpg";


function Women() {
  const women = {
    versage: {
      image: womenImage,
      path: "/",
      title: "Versage",
      price: 1250,
    },
    louisvuiton: {
      image: womenImage,
      path: "/",
      title: "lorem",
      price: 120,
    },
    balenciaga: {
      image: womenImage,
      path: "/",
      title: "calkl",
      price: 150,
    },
    new: {
      image: womenImage,
      path: "/",
      title: "calkl",
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

      <WomenList  women={women} />
    </>
  );
}
export default Women;
