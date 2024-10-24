import React from "react";
import useBaseState from "../hooks/useBaseState";
import { deleteData, getData, postData, updateData } from "../utils/apiHandler";
import { checkAddCartBody, checkUpdateCartBody } from "../utils/cartValidator";

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

const CART_ID_REF = "mqoGNJ9284nUUkKo1bnd";

function CartsContextProvider({ children }) {
  const { isLoading, erorr, data, setLoading, setSuccess, setError, setEmpty } =
    useBaseState();
  const [cartId, setCartId] = React.useState(CART_ID_REF);
  // derived state
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
  const loadCart = async (cartid) => {
    setLoading();
    try {
      const { id, items } = await getData(`carts/${cartid}`);
      setCartId(id);
      const finalResult = await Promise.all(
        items.map((item) => getByPermalink(item))
      );
      setSuccess(finalResult);
    } catch (err) {
      setError(err);
    }
  };
  //add item to new cart
  const addNewCart = async (body) => {
    setLoading();
    try {
      const validated = checkAddCartBody(body);
      const { id, items } = await postData("carts", { items: validated });
      setCartId(id);
      const finalResult = await Promise.all(
        items.map((item) => getByPermalink(item))
      );
      setSuccess(finalResult);
    } catch (err) {
      setError(err.message);
    }
  };
  //add item to existing cart
  const addExistCart = async (body) => {
    setLoading();
    try {
      const validated = checkAddCartBody(body);
      const { id, items } = await postData(`carts/${cartId}/items`, {
        items: validated,
      });
      setCartId(id);
      const finalResult = await Promise.all(
        items.map((item) => getByPermalink(item))
      );
      setSuccess(finalResult);
    } catch (err) {
      setError(err.message);
    }
  };
  const addCart = async (body) => {
    if (cartId) {
      await addExistCart(body);
      return;
    }
    await addNewCart(body);
  };
  //delete from existing cart
  const deleteCart = async (itemId) => {
    setLoading();
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
    setLoading();
    try {
      const { items } = await updateData(
        `carts/${cartId}/items/${itemId}`,
        validatedBody
      );
      const finalResult = await Promise.all(
        items.map((item) => getByPermalink(item))
      );
      setSuccess(finalResult);
    } catch (err) {
      setError(err);
    }
  };
  //claer cart on checkout
  const checkout = () => {
    setCartId(null);
    setEmpty();
  };

  //permalink logic
  const getByPermalink = async (cart) => {
    try {
      const permalinkData = await getData(`products/${cart.productPermalink}`);
      const [initial] = permalinkData.variants.filter(
        (data) => data.skuCode === cart.skuCode
      );
      const colorList = permalinkData.variants.reduce(
        (prev, { color }) => (prev.includes(color) ? prev : [...prev, color]),
        []
      );
      return { ...permalinkData, colorList, ...cart, ...initial };
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
        value={{ addCart, deleteCart, updateCartByItem, checkout }}
      >
        {children}
      </CartContextMutation.Provider>
    </CartContext.Provider>
  );
}

export default CartsContextProvider;
