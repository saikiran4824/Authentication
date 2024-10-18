import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClYPy3nscXi_imyC-t3cgCrryPENhIUhA",
  authDomain: "fir-auth-9c2a8.firebaseapp.com",
  projectId: "fir-auth-9c2a8",
  storageBucket: "fir-auth-9c2a8.appspot.com",
  messagingSenderId: "754200905222",
  appId: "1:754200905222:web:0c220aec7314a569676587",
  measurementId: "G-GZKB7QKWBM"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
