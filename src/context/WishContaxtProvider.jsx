import { useContext, createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContextProvider";
import { onValue, ref, set } from "firebase/database";
import { db } from "../utils/firebase";

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
  //remove item
  const removeFavorite = async (item) => {
    const newList = [...wishList.filter((d) => d !== item)];
    if (!account) {
      setWishList(newList);
      localStorage.setItem("wishes", JSON.stringify(newList));
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
      localStorage.setItem("wishes", JSON.stringify(newList));
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
    const local = localStorage.getItem("wishes");
    if (!local) return;
    (async () => {
      try {
        const dbRef = ref(db, `wishes/${account}`);
        const jsonData = JSON.parse(local);
        await set(dbRef, jsonData);
      } catch (err) {
        console.log(err);
      } finally {
        localStorage.clear("wishes");
      }
    })();
  }, [sync]);
  // sync local storage
  useEffect(() => {
    const local = localStorage.getItem("wishes");
    console.log(local);
    if (!local) return;
    setWishList(JSON.parse(local));
  }, []);
  return (
    <WishContxt.Provider value={{ wishList, toggle, favorite }}>
      {children}
    </WishContxt.Provider>
  );
}

export default WishContaxtProvider;
