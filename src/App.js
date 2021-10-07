import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isCartActive = useSelector((state) => state.cart.showModal);
  console.log({ isCartActive });
  return (
    <Layout>
      {isCartActive && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
