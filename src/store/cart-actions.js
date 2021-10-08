import HTTPRequest from "../utils/http-request";
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
const SERVER_URL = process.env.REACT_APP_SERVER_URL + "/carts.json";

const sendRequest = async (url, type, data = null) => {
  let response;
  if (type === "GET") {
    response = await HTTPRequest.get(url);
  } else if (type === "PUT") {
    response = await HTTPRequest.put(url, data);
  } else {
    console.log("invalid options");
  }
  if (!response.ok) {
    throw new Error("Something went wrong.");
  }
  return response;
};

const uploadCart = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "default",
        title: "loading",
        message: "loading response",
      })
    );

    try {
      await sendRequest(SERVER_URL, "PUT", cart);
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Successfully added to Cart",
        })
      );
    } catch (e) {
      console.log(e);
      uiActions.showNotification({
        status: "error",
        title: "Error Happened",
        message: e.message,
      });
    }
  };
};

const getCart = () => {
  return async (dispatch) => {
    try {
      const response = await sendRequest(SERVER_URL, "GET");
      const cart = await response.json();
      dispatch(cartActions.updateCart(cart));
    } catch (e) {
      console.log(e);
      uiActions.showNotification({
        status: "error",
        title: "Error Happened",
        message: e.message,
      });
    }
  };
};

export default uploadCart;
export { getCart };
