import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isCartActive = useSelector((state) => state.cartUIUpdate.showModal);
  return (
    <Layout>
      {isCartActive && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
