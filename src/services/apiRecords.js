import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const recordsRef = collection(db, "records");

export const getRecords = async () => {
  const recordsCollection = recordsRef;
  const recordsSnapshot = await getDocs(recordsCollection);
  const records = recordsSnapshot.docs.map((doc) => {
    return { data: doc.data(), id: doc.id };
  });
  return records;
};

export const getRecordById = async (id) => {
  const recordRef = doc(db, "records", id);
  const record = (await getDoc(recordRef)).data();
  return record;
};

export const addRecord = async (record) => {
  const q = query(
    recordsRef,
    where("month", "==", record.month),
    where("year", "==", record.year)
  );
  const isExist = (await getDocs(q)).docs.map((doc) => doc.data()).length >= 1;
  if (isExist) throw new Error("Record already exist");

  const timestamp = serverTimestamp();
  const docRef = await addDoc(recordsRef, { ...record, createdAt: timestamp });
  return docRef;
};

export const deleteRecord = async (id) => {
  const data = await deleteDoc(doc(db, "records", id));
  return data;
};

export const updateRecord = async ({ id, updatedRecord }) => {
  const recordRef = doc(db, "records", id);
  const data = await updateDoc(recordRef, updatedRecord);
  return data;
};
