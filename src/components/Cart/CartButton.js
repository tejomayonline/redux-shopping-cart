import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const getTotalItems = () => {
    return cartItems.reduce((acc, curr) => acc + curr.count, 0);
  };
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{getTotalItems()}</span>
    </button>
  );
};

export default CartButton;
