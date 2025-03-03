import { auth } from "./Firebase";
import { signOut } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail, getAuth } from "firebase/auth";
  
export async function register(email, password, setUser) {
    return await createUserWithEmailAndPassword(auth, email, password);
}
export async function login(email, password){
    return signInWithEmailAndPassword(auth,email,password);
}
export async function logOut(setUser) {
    try {
        await signOut(auth);
        setUser(null);
    } catch (error) {
        console.error("Logout failed:", error.message);
    }
}
