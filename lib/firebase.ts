import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBijlqrIJ4wXFBs14jnrrv6wA5N6buekPs",
  authDomain: "power-management1.firebaseapp.com",
  databaseURL:
    "https://power-management1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "power-management1",
  storageBucket: "power-management1.firebasestorage.app",
  messagingSenderId: "214368422406",
  appId: "1:214368422406:web:912ec365796c9ed761d187",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const database = getDatabase(app);