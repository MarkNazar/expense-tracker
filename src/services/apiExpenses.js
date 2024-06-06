import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const expensesRef = collection(db, "expenses");

export const getExpenses = async (id) => {
  const q = query(expensesRef, where("recordId", "==", id));
  const expensesSnapshot = await getDocs(q);
  const expenses = expensesSnapshot.docs.map((doc) => {
    return { data: doc.data(), id: doc.id };
  });
  return expenses;
};

export const addExpense = async (expense) => {
  const timestamp = serverTimestamp();
  const docRef = await addDoc(expensesRef, {
    ...expense,
    createdAt: timestamp,
  });
  return docRef;
};

export const updateExpense = async ({ id, updatedExpense }) => {
  const expenseRef = doc(db, "expenses", id);
  const data = await updateDoc(expenseRef, updatedExpense);
  return data;
};

export const deleteExpense = async (id) => {
  const data = await deleteDoc(doc(db, "expenses", id));
  return data;
};
