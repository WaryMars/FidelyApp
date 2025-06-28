// app/services/authService.ts
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

export const registerUser = async ({
  email,
  password,
  name,
  role,
}: {
  email: string;
  password: string;
  name: string;
  role: "client" | "commercant";
}) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const uid = userCredential.user.uid;

  // Ajouter dans la collection "users"
  await setDoc(doc(db, "users", uid), {
    uid,
    email,
    name,
    role,
    createdAt: serverTimestamp(),
  });

  // Si commerçant, créer son commerce (exemple simplifié)
  if (role === "commercant") {
    await setDoc(doc(db, "commerces", uid), {
      uid,
      name: "Mon commerce",
      description: "",
      adresse: "",
      tags: [],
      createdAt: serverTimestamp(),
    });
  }

  return uid;
};
