import React, { useContext } from "react";
import useBaseState from "../hooks/useBaseState";
import { deleteData, getData, postData, updateData } from "../utils/apiHandler";
import { checkAddCartBody, checkUpdateCartBody } from "../utils/cartValidator";

const CartContext = React.createContext(null);

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx)
    throw new Error("useCartContext must be used in CartContextProvider");
  return ctx;
};

function CartsContextProvider({ children }) {
  const { isLoading, erorr, data, setLoading, setSuccess, setError } =
    useBaseState();
  const [requiredRefetch, setRequiredRefetch] = React.useState(false);
  const [cartId, setCartId] = React.useState(null);
  //add item to new cart
  const addNewCart = async (body) => {
    const validatedBody = checkAddCartBody(body);
    try {
      const { id } = await postData("carts", validatedBody);
      setCartId(id);
      setRequiredRefetch(true);
    } catch (err) {
      setError(err.message);
    }
  };
  //delete from existing cart
  const deleteCart = async (itemId) => {
    try {
      await deleteData(`carts/${cartId}/items/${itemId}`);
      setRequiredRefetch(true);
    } catch (err) {
      setError(err.message);
    }
  };
  //update existing cart
  const updateCartByItem = async (itemId, body) => {
    const validatedBody = checkUpdateCartBody(body);
    try {
      await updateData(`carts/${cartId}/items/${itemId}`, validatedBody);
      setRequiredRefetch(true);
    } catch (err) {
      setError(err);
    }
  };
  //ask TA if post, delete, patch return total cart or not then revist this logic
  React.useEffect(() => {
    if (!requiredRefetch || !cartId) return;
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      setLoading();
      try {
        const { data } = await getData(`carts/${id}`, { signal });
        setSuccess(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setRequiredRefetch(false);
      }
    })();
    return () => {
      controller.abort();
    };
  }, [requiredRefetch, cartId]);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartsContextProvider;
