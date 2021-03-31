import type { UserData } from "../types/user";
import { firebase } from "./firebase";

const db = firebase.firestore();

export const createUser = (user: UserData): Promise<void> => {
  return db.doc(`users/${user.uid}`).set(user);
};

export const updateUser = (data: Partial<UserData>) => {
  return db.doc(`users/${data.uid}`).set({ data }, { merge: true });
};

export const getUser = async (uid: string): Promise<UserData> => {
  return (await db.doc(`users/${uid}`).get()).data() as UserData;
};
