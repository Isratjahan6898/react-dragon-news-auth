import {  createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
  
  


const auth = getAuth(app);
 export const AuthContext = createContext(null);

const Provider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState (true)

    const createUser = (email,password) =>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword ( auth,email,password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut (auth)
    }

    useEffect(()=>{

      const unSubscribe=  onAuthStateChanged (auth , currentUser =>{
            console.log('user in the auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        });

        return () =>{
            unSubscribe()

        }
    },[])


    const authInfo ={ 
        user,
        loading,
        createUser,
        logOut, 
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;