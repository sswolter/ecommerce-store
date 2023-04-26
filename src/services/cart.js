import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../firebase";

export const getCart = async () => {
  const querySnapshot = await getDocs(collection(db, "cart"));
  const data = querySnapshot.docs.map((doc) => {
    // console.log(doc.id, " => ", doc.data());
    const id = doc.id;
    const restOfData = doc.data();
    return { id, ...restOfData };
  });
  return data;
};

export const removeItem = async (id) => {
  await deleteDoc(doc(db, "cart", id));
};
