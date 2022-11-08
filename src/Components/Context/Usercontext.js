import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged, 
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const Usercontext = ({ children }) => {
  const [user, setUser] = useState("Rahul");
  const [loder, setloder] = useState(false);

  //email and pass sign up
  const signupEmail = (email, password) => {
    setloder(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //signin email and password
  const signinemail = (email, password) => {
    setloder(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sign out
  const signoutff =()=>{
    return signOut(auth)
  }

  //siign up google
const provider = new GoogleAuthProvider();
  const signupgoogle=()=>{
    return signInWithPopup(auth , provider)

  }

  // get the user 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , creantuser =>{
        setUser(creantuser)
        setloder(false)
    });
    return ()=>{
        unsubscribe()
    }
  },[])

  const authinfo = { user , loder , auth ,signupgoogle, signoutff , signupEmail, signinemail };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default Usercontext;
