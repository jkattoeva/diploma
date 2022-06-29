
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckOut";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import SignOut from "./pages/SignOut";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'cart/restore' });
  }, [dispatch]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/favourite" element={<NotFound />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
