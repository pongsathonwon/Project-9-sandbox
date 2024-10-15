import React from "react";
import useBaseState from "../hooks/useBaseState";
import { deleteData, getData, postData, updateData } from "../utils/apiHandler";
import { checkAddCartBody, checkUpdateCartBody } from "../utils/cartValidator";

const CartContext = React.createContext(null);

export const useCartContext = () => {
  const ctx = React.useContext(CartContext);
  if (!ctx)
    throw new Error("useCartContext must be used in CartContextProvider");
  return ctx;
};

function CartsContextProvider({ children }) {
  const { isLoading, erorr, data, setLoading, setSuccess, setError } =
    useBaseState();
  const [cartId, setCartId] = React.useState("0tvpnVxMsRvjAgiTEpmU");
  //load cart
  const loadCart = async (cart) => {
    setLoading();
    try {
      const { id, items } = await getData(`carts/${cart}`);
      setCartId(id);
      setSuccess(items);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  //add item to new cart
  const addNewCart = async (body) => {
    const validated = checkAddCartBody(body);
    try {
      const { id, items } = await postData("carts", { items: validated });
      setCartId(id);
      setSuccess(items);
    } catch (err) {
      setError(err.message);
    }
  };
  //delete from existing cart
  const deleteCart = async (itemId) => {
    try {
      const data = await deleteData(`carts/${cartId}/items/${itemId}`, {});
      await loadCart(cartId);
    } catch (err) {
      setError(err.message);
    }
  };
  //update existing cart
  const updateCartByItem = async (itemId, body) => {
    const validatedBody = checkUpdateCartBody(body);
    try {
      const { items } = await updateData(
        `carts/${cartId}/items/${itemId}`,
        validatedBody
      );
      setSuccess(items);
    } catch (err) {
      setError(err);
    }
  };

  React.useEffect(() => {
    if (!cartId) return;
    loadCart(cartId);
  }, []);
  //ask TA if post, delete, patch return total cart or not then revist this logic
  return (
    <CartContext.Provider
      value={{
        isLoading,
        erorr,
        data,
        setCartId,
        addNewCart,
        deleteCart,
        updateCartByItem,
        loadCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartsContextProvider;
