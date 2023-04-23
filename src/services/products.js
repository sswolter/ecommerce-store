// functions that interact with firestore

import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";

// all documents
export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const data = querySnapshot.docs.map((doc) => {
    const id = doc.id;
    const restOfData = doc.data();
    return { id, ...restOfData };
  });
  return data;
};

// console.log(getAllProducts(), "get all products");

const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  console.log(docSnap.exists());
  console.log(docSnap.data());

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Doc not found");
  }
};
