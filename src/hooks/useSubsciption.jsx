import React from "react";
import { useState } from "react";
import { db } from "../utils/firebase";
import { push, ref, set } from "firebase/database";

function useSubsciption() {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  const submit = async () => {
    if (email === "") return;
    try {
      const dbRef = ref(db, "/sub");
      await push(dbRef, email);
    } catch (err) {
      console.error(err);
    } finally {
      setEmail("");
    }
  };
  return { email, onChange, submit };
}

export default useSubsciption;
