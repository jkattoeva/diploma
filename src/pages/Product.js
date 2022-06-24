import { useParams } from "react-router-dom";
import CartButton from "../components/CartButton/CartButton";
import { getProduct } from "../data/products";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
    <div className="ProductPage">
      <img src={product.image} alt={product.title}/>
      <h1>{product.title}</h1>
      <span>{product.price}$</span>
      <p>{product.description}</p>
    </div>
      <CartButton productId={params.productId} />
    </>
  );
}

export default Product;
