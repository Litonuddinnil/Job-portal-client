import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
 const [user,setUser] =  useState(null);
 const [loading,setLoading] = useState(true);

 const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
 }
 const signInUser = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
 }

  useEffect(()=>{
   const unSubscriber = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log('state capture',currentUser);
        setLoading(false);
    });
    return ()=>{
        unSubscriber();
    }
  },[])

  const signInGoogle = ()=>{
    return signInWithPopup(auth,provider);
  }

  const useLogOut = ()=>{
    setLoading(true);
    return signOut(auth);
  }
    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        signInGoogle,
        useLogOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;