import { useContext, createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContextProvider";
import { onValue, ref, set } from "firebase/database";
import { db } from "../utils/firebase";
import { loadLocal, LOCALSTORAGE_KEY, saveToLocal } from "../utils/loacl";

const WishContxt = createContext();

export const useWishContext = () => {
  const ctx = useContext(WishContxt);
  if (!ctx) throw new Error("must be used in wish ctx provider");
  return ctx;
};

function WishContaxtProvider({ children }) {
  const [wishList, setWishList] = useState([]);
  const { account } = useAuthContext();
  const [sync, setSync] = useState(false);
  const isListEmpty = wishList.length === 0;
  const saveLocalWish = saveToLocal(LOCALSTORAGE_KEY.wish);
  //remove item
  const removeFavorite = async (item) => {
    const newList = [...wishList.filter((d) => d !== item)];
    if (!account) {
      setWishList(newList);
      saveLocalWish(newList, 1);
      return;
    }
    const dbRef = ref(db, `wishes/${account}`);
    try {
      await set(dbRef, newList);
      // handle if empty rtdb return null
      if (newList.length === 0) {
        setWishList([]);
      }
    } catch (err) {
      console.error(err);
    }
  };
  //add item
  const setFavorite = async (item) => {
    const newList = [...wishList, item];
    if (!account) {
      setWishList(newList);
      saveLocalWish(newList, 1);
      return;
    }
    const dbRef = ref(db, `wishes/${account}`);
    try {
      await set(dbRef, newList);
    } catch (error) {
      console.error(error);
    }
  };
  const favorite = (permalink) => wishList?.includes(permalink) ?? false;
  //combine both add and remove
  const toggle = async (permalink) => {
    const fav = favorite(permalink);
    if (fav) {
      await removeFavorite(permalink);
    } else {
      await setFavorite(permalink);
    }
  };
  //load wish list depend on account
  useEffect(() => {
    // if no account (uid) return
    if (!account) {
      setSync(false);
      return;
    }
    const dbRef = ref(db, `wishes/${account}`);
    const sub$ = onValue(
      dbRef,
      (snapshot) => {
        // success load wish list => list ?? null
        const dbData = snapshot.val();
        if (!dbData) {
          //no rt data > not set array, flag sync to true
          setSync(true);
          return;
        }
        setWishList(dbData);
        setSync(true);
      },
      (error) => {
        console.log(error);
      }
    );
    return sub$;
  }, [account]);
  // sync local to rt
  useEffect(() => {
    //if not sync > return
    if (!sync) return;
    // if no local wish return
    if (isListEmpty) return;
    // sync and local wish update rt wish
    const localData = loadLocal(LOCALSTORAGE_KEY.wish);
    if (!localData) return;
    (async () => {
      try {
        const dbRef = ref(db, `wishes/${account}`);
        await set(dbRef, localData);
      } catch (err) {
        console.log(err);
      } finally {
        localStorage.clear("wishes");
      }
    })();
  }, [sync]);
  // sync local storage
  useEffect(() => {
    const localData = loadLocal(LOCALSTORAGE_KEY.wish);
    if (!localData) return;
    setWishList(localData);
  }, []);
  return (
    <WishContxt.Provider value={{ wishList, toggle, favorite }}>
      {children}
    </WishContxt.Provider>
  );
}

export default WishContaxtProvider;
