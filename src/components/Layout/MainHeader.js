import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const showCart = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={showCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
