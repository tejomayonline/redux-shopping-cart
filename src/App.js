import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import uploadCart from "./store/cart-actions";

function App() {
  const isCartActive = useSelector((state) => state.ui.showModal);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect APP runing...");
    if (cart.items.length > 0 && cart.changed) {
      dispatch(uploadCart(cart.items));
    }
  }, [cart, dispatch]);
  return (
    <Layout>
      {notification && <Notification {...notification} />}
      {isCartActive && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
