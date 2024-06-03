import { getDoc,doc } from "firebase/firestore";
import { db } from "../config/firebase";

export async function GetProfileDetails(email){
    try {
        
        const docRef = doc(db, "student", email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            
            console.log("Document data:", docSnap.data());
            return { status: true, data: docSnap.data() };
        } else {
            // console.log("Fetched")
            return { status: false };
        }
        
    } catch (error) {
        console.error("Error during fetching profile details:", error.message);
        return { status: false };
    }
}