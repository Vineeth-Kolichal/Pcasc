import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaWasre7-xgdY2ghSzvYJuq1MwVTmHDK8",
  authDomain: "pcasc-516e1.firebaseapp.com",
  projectId: "pcasc-516e1",
  storageBucket: "pcasc-516e1.firebasestorage.app",
  messagingSenderId: "1027593718172",
  appId: "1:1027593718172:web:98915c31aee1455be66059",
  measurementId: "G-V50VHCS4L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
