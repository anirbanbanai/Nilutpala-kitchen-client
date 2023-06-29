import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider()
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoadng] = useState(true);

    const signUp = (email, pasword) => {
        return createUserWithEmailAndPassword(auth, email, pasword);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleAuth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
      }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (userr) => {
            setUser(userr)
            setLoadng(false)
        });
        return () =>
            unsub()
    }, [])

    const authInfo = {
        loading,
        user,
        signUp,
        loginUser,
        logOut,
        googleSignIn,
        updateUserProfile,
        auth,
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;