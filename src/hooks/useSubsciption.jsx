import React from "react";
import { useState } from "react";
import { db } from "../utils/firebase";
import { push, ref, set } from "firebase/database";

function useSubsciption() {
  const [email, setEmail] = useState("");
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const invalid = (!emailReg.test(email) || email.length > 20) && email !== "";
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
  return { email, invalid, onChange, submit };
}

export default useSubsciption;
