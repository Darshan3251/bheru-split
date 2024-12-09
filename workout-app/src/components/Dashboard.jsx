// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <div className="dashboard-container">
      {user ? (
        <div>
          <h2>Welcome, {user.displayName || user.email}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <h2>No user logged in</h2>
      )}
    </div>
  );
};

export default Dashboard;
