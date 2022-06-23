import Header from "../components/Header/Header";
import image from "../assets/headerImage.jpg";

function Cart() {



  return (
    <>
      <Header
        title="Your Shopping Cart"
        image={image}>
        Please review items in your cart.
      </Header>
    </>
  );
}


export default Cart; 