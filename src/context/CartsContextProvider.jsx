import React from "react";
import useBaseState from "../hooks/useBaseState";
import { deleteData, getData, postData, updateData } from "../utils/apiHandler";
import { checkAddCartBody, checkUpdateCartBody } from "../utils/cartValidator";
import { transformer } from "../utils/modifiedPermalik";

const CartContext = React.createContext(null);

const CartContextMutation = React.createContext(null);

export const useCartMutation = () => {
  const ctx = React.useContext(CartContextMutation);
  if (!ctx)
    throw new Error(
      "useCartMutation must be used in CartContextMutationProvider"
    );
  return ctx;
};

export const useCartContext = () => {
  const ctx = React.useContext(CartContext);
  if (!ctx)
    throw new Error("useCartContext must be used in CartContextProvider");
  return ctx;
};

function CartsContextProvider({ children }) {
  const { isLoading, erorr, data, setLoading, setSuccess, setError } =
    useBaseState();
  const [cartId, setCartId] = React.useState("E7wSPZbIQWerYZtdQp8X");
  const isEmptyCart = !data || data.length === 0;
  const summaryList = data?.map(({ name, promotionalPrice, quantity }) => ({
    name,
    quantity,
    sum: promotionalPrice * quantity,
  })) ?? [{ name: "no items", quantity: 0, sum: 0 }];
  const subtotal = summaryList.reduce(
    ({ total, subtotal }, { quantity, sum }) => ({
      total: total + quantity,
      subtotal: subtotal + sum,
    }),
    { total: 0, subtotal: 0 }
  );
  //load cart
  const loadCart = async (cart) => {
    setLoading();
    try {
      const { id, items } = await getData(`carts/${cart}`);
      setCartId(id);
      const modItems = await getPermalinkRes(items);
      setSuccess(modItems);
    } catch (err) {
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
      await deleteData(`carts/${cartId}/items/${itemId}`, {});
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

  //permalink logic
  const getPermalinkRes = async (carts) => {
    if (!carts || carts.length === 0) return;
    try {
      const permalinkList = carts.map(({ productPermalink }) =>
        getData(`products/${productPermalink}`)
      );
      const resResult = await Promise.all(permalinkList);
      console.log("succes get permalink");
      console.info(resResult);
      const dataResult = resResult.map((res) => ({
        ...res,
        ...transformer(res.variants),
      }));
      console.info(dataResult);
      const mergeResult = dataResult.map((d, i) => ({ ...d, ...carts[i] }));
      return mergeResult;
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (!cartId) return;
    loadCart(cartId);
  }, []);

  return (
    <CartContext.Provider
      value={{ isLoading, erorr, data, isEmptyCart, summaryList, subtotal }}
    >
      <CartContextMutation.Provider
        value={{ addNewCart, deleteCart, updateCartByItem }}
      >
        {children}
      </CartContextMutation.Provider>
    </CartContext.Provider>
  );
}

export default CartsContextProvider;
