import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const removeItem = async (id) => {
  await deleteDoc(doc(db, "cart", id));
};
