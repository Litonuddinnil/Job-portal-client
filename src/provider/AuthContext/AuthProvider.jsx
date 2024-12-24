import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import axios from 'axios';
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
        console.log('state capture',currentUser?.email);
        if(currentUser?.email){
          const user = {email : currentUser.email};
          axios.post('http://localhost:3000/jwt',user,{withCredentials:true})
          .then(res => {
            console.log('when user login',res.data);
            setLoading(false);}
          )
        }
        else
        {
          axios.post('http://localhost:3000/logout',{},{withCredentials:true})
          .then(res =>{
            console.log('logout the user',res.data);
            setLoading(false);}
          )
        }
       
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