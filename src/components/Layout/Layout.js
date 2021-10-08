import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "../../store/cart-actions";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
