import React, { useEffect, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const authLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Login successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    await signOut(auth);
    alert("Logout successfully.!!");
  };

  useEffect(() => {
    const stop = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => stop();
  }, []);

  console.log(user);

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Google Authentication</h1>
        <p className="login-subtitle">
          Sign in with your Google account
        </p>

        <button onClick={authLogin} className="google-btn">
          Continue With Google
        </button>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>

        {user && (
          <div className="user-card">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="user-image"
            />

            <h2 className="user-name">{user.displayName}</h2>
            <h3 className="user-email">{user.email}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;