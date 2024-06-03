import { AddUser } from "./authentication.controller";
import { db } from "../config/firebase";
import { set } from "firebase/database";
import { setDoc,doc } from "firebase/firestore";

export async function Register(student_object) {
  try {
    const {
      name,
      email,
      password,
      contact_no,
      faculty,
      department,
      subjects_needs_tutor,
      subjects_student_knows,
    } = student_object;

    const student = {
      name: name,
      email: email,
      password: password,
      faculty: faculty,
      department: department,
      contact_no: contact_no,
      subjects_needs_tutor: subjects_needs_tutor,
      subjects_student_knows: subjects_student_knows,
    };

    const response = await AddUser(email, password);

    if (response.status) {
      const docRef = await setDoc(doc(db, "student", email), student);
    //   console.log("Document written with ID: ", docRef.email);
      return { status: true };
    } else {
      return { status: false };
    }
  } catch (error) {
    console.error("Error during registration:", error.message);
    return { status: false };
  }
}
