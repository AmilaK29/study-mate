import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../config/firebase";

export function Authenticate(email,password){

    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        return user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        return errorMessage;
        // ..
    });
}