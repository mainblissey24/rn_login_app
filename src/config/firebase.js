
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwMJ7T_hN2pnGzGOu38vmZxvdlfr2YrcE",
  authDomain: "applogin-ff2a3.firebaseapp.com",
  databaseURL: "https://applogin-ff2a3-default-rtdb.firebaseio.com",
  projectId: "applogin-ff2a3",
  storageBucket: "applogin-ff2a3.appspot.com",
  messagingSenderId: "454685773576",
  appId: "1:454685773576:web:15e9c7c7648527db6fe6bd"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db = getFirestore(app);