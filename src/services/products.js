import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  addDoc,
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

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Doc not found");
  }
};

export const updateProduct = async (id, dataObj) => {
  const docRef = doc(db, "products", id);
  await updateDoc(docRef, dataObj);
};

export const getFavProducts = async () => {
  const products = await getAllProducts();
  if (products) {
    const favPro = products.filter((product) => product.fav);
    return favPro;
  }
};

export const addItem = async (someObj) => {
  const docRef = await addDoc(collection(db, "cart"), someObj);
};
