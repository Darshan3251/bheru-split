import React from "react";
import { auth, googleProvider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

const Login = ({ setUser }) => {
  // Google Login
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google login success:", result.user);
      setUser(result.user); // Update the user state in App
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome</h2>
      <button onClick={googleLogin} className="google-login-btn">
        Continue with Google
      </button>
    </div>
  );
};

export default Login;


// // src/components/Login.js
// import React, { useState } from 'react';
// import { auth, googleProvider } from '../firebase/firebase';
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signInWithPopup,
// } from 'firebase/auth';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // Email Login
//   const emailLogin = async () => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log('Logged in user:', userCredential.user);
//     } catch (error) {
//       console.error('Login error:', error.message);
//     }
//   };

//   // Email Signup
//   const emailSignup = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       console.log('New user created:', userCredential.user);
//     } catch (error) {
//       console.error('Signup error:', error.message);
//     }
//   };

//   // Google Login
//   const googleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       console.log('Google login success:', result.user);
//     } catch (error) {
//       console.error('Google login error:', error.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Enter your password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={emailLogin}>Login</button>
//       <button onClick={emailSignup}>Sign Up</button>
//       <button onClick={googleLogin}>Continue with Google</button>
//     </div>
//   );
// };

// export default Login;
