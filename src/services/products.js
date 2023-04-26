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

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const data = querySnapshot.docs.map((doc) => {
    const id = doc.id;
    const restOfData = doc.data();
    return { id, ...restOfData };
  });
  return data;
};

//add products only needed for cart
// export const addMovie = async (someObj) => {
//   const docRef = await addDoc(collection(db, "cart"), someObj);
// };

// export const deleteMovie = async (id) => {
//   await deleteDoc(doc(db, "products", id));
// };

export const getProductByID = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Doc not found.");
  }
};

export const updateProduct = async (id, dataObject) => {
  const docRef = doc(db, "products", id);
  await updateDoc(docRef, dataObject);
};
// add error handling
