import { useParams } from "react-router-dom";
import CartButton from "../components/CartButton/CartButton";
import ProductPage from "../components/ProductPage/ProductPage";
import { getProduct } from "../data/products";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
    <ProductPage />
    </>
  );
}

export default Product;
