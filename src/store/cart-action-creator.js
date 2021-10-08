import { uiActions } from "./ui-slice";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const sendRequest = async (cart) => {
  const cartResponse = await fetch(REACT_APP_SERVER_URL + "/carts.json", {
    method: "PUT",
    body: JSON.stringify(cart),
    headers: { "Content-Type": "application/json" },
  });
  if (!cartResponse.ok) {
    throw new Error("Something went wrong.");
  }
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
      await sendRequest(cart);
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

export default uploadCart;
