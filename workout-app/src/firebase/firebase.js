// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCmvE6LSLOOK79mr2DT4h8_K_tPsdmwmOU",
//   authDomain: "bheru-split.firebaseapp.com",
//   projectId: "bheru-split",
//   storageBucket: "bheru-split.firebasestorage.app",
//   messagingSenderId: "681288872907",
//   appId: "1:681288872907:web:31c273ea41e201425f3c4e",
//   measurementId: "G-H0HKLYBHXS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import Authentication functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmvE6LSLOOK79mr2DT4h8_K_tPsdmwmOU",
  authDomain: "bheru-split.firebaseapp.com",
  projectId: "bheru-split",
  storageBucket: "bheru-split.firebasestorage.app",
  messagingSenderId: "681288872907",
  appId: "1:681288872907:web:31c273ea41e201425f3c4e",
  measurementId: "G-H0HKLYBHXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);

// Export `auth` and `googleProvider` to use them in other components
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };  // Export `auth` here
