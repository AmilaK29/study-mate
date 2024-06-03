import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../config/firebase";

export async function Authenticate(email,password){

    const auth = getAuth(app);
    console.log("Authenticating");

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return {status : true, user : user};
    } catch (error) {
        console.error('Error during authentication:', error.code, error.message);
        return {status : false, user : null};
    }
}


export async function AddUser(email,password){
    const auth = getAuth(app);
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return {status : true, user : user};
    } catch (error) {
        console.error('Error during registration:', error.code, error.message);
        return {status : false, user : null};
    }
}