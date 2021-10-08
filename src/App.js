import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import uploadCart from "./store/cart-action-creator";

function App() {
  const isCartActive = useSelector((state) => state.ui.showModal);
  const cartItems = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect APP runing...");
    if (cartItems.length > 0) {
      dispatch(uploadCart(cartItems));
    }
  }, [cartItems, dispatch]);
  return (
    <Layout>
      {isCartActive && <Cart />}
      {notification && <Notification {...notification} />}
      <Products />
    </Layout>
  );
}

export default App;
