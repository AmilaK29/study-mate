
import { db } from "../config/firebase";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";

export async function getSubujectKnowsArray(email){
    //This function will return the array of subjects that a
    //student can tutor.
    // input : student's email

    try {
        const docRef = doc(db, "student", email);
        const querySnapshot = await getDoc(docRef);
        const subjects = [];
        if (querySnapshot.exists()) {
            console.log("Document data:", querySnapshot.data());
            for (const subject of querySnapshot.data().subjects_student_knows) {
                subjects.push(subject);
            }
            return { status: true, data: subjects };
        }
        return { status: true, data: subjects };
        
    } catch (error) {
        console.error("Error during fetching profile details:", error.message);
        return { status: false ,data : []};
    }

}

export async function getTutorsForASubject(subject){
    //This function will return the array of tutors that can teach the subject
    // input : subject
    try {
        const docRef = collection(db, "student");
        const docSnap = await getDocs(docRef);
        const tutors = [];
        if(docSnap.empty){
            return { status: true, data: tutors };
        }
        for (const doc of docSnap.docs) {
            for (const subject_description of doc.data().subjects_student_knows) {
                // console.log(subject_description.subject);
                if(subject_description.subject === subject){
                    tutors.push(doc.data());
                }
            }
        }
        return { status: true, data: tutors };
    } catch (error) {
        console.error("Error during fetching tutors:", error.message);
        return { status: false ,data : []};
    }
}

export async function getSubjectsNeedsATutor(email){
    try {
        const docRef = doc(db, "student", email);
        const querySnapShot = await getDoc(docRef);
        const subjects = [];

        if(querySnapShot.exists()){
            for(const subject of querySnapShot.data().subjects_needs_tutor){
                subjects.push(subject);
            }
            return { status: true, data: subjects };
        }
        else{
            return { status: true, data: subjects };
        
        }
    } catch (error) {
        console.error("Error during fetching profile details:", error.message);
        return { status: false ,data : []};
    }
}

export async function getTutorsForAStudent(email){
    try {
        const subjects = await getSubjectsNeedsATutor(email);
        const tutors = [];
        for(const subject of subjects.data){
            const tutor = await getTutorsForASubject(subject);
            for(const tutor_data of tutor.data){
                tutors.push(tutor_data);
            }
        }
        return { status: true, data: tutors };
    } catch (error) {
        console.error("Error during fetching tutors:", error.message);
        return { status: false ,data : []}; 
    }
}




