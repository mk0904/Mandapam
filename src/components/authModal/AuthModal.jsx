import React, { useState } from "react";
import { auth, db } from "./firebase"; // Import Firebase auth and Firestore
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // Added signInWithEmailAndPassword for email login
import { doc, setDoc, getDoc } from "firebase/firestore"; // Firestore methods for storing and retrieving user data
import "./AuthModal.css";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isEmailSignUp, setIsEmailSignUp] = useState(false);
  const [isEmailLogin, setIsEmailLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Added for error feedback

  // Switch between Login/Signup views
  const switchToSignup = () => {
    setIsLogin(false);
    setIsEmailSignUp(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
    setIsEmailLogin(false);
  };

  const initiateEmailSignUp = () => setIsEmailSignUp(true);
  const handleEmailLogin = () => setIsEmailLogin(true);

  // Google Sign-In Handler
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save user data in Firestore if signing in for the first time
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          firstName: user.displayName.split(" ")[0] || "",
          lastName: user.displayName.split(" ")[1] || "",
          email: user.email,
          phone: user.phoneNumber || "",
          address: ""
        });
      }

      console.log("User signed in:", user);
      onClose(); // Close modal after successful sign-in
    } catch (error) {
      setErrorMessage("Google sign-in failed. Please try again.");
      console.error("Google sign-in error:", error.message);
    }
  };

  // **Email Sign-Up Handler**
  const handleEmailSignUp = async (e) => {
    e.preventDefault();  // Prevent form submission (page reload)

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      // Store user data in Firestore with uid
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        phone,
        address,
      });

      console.log("User signed up and data saved:", user);
      onClose(); // Close modal after successful sign-up
    } catch (error) {
      setErrorMessage("Email sign-up failed. Please try again.");
      console.error("Email sign-up error:", error.message);
    }
  };

  // **Email Login Handler**
  const handleEmailLoginSubmit = async (e) => {
    e.preventDefault();  // Prevent page reload
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;

      // Fetch user data from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log("User logged in and data fetched:", userData);
      } else {
        console.error("No user data found in Firestore.");
      }

      onClose(); // Close modal after successful login
    } catch (error) {
      setErrorMessage("Email login failed. Please check your credentials.");
      console.error("Email login error:", error.message);
    }
  };

  if (!isOpen) return null; // Modal will not render if isOpen is false

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Left side of the modal */}
        <div className="modal-left">
          <h2>Welcome to Mandapam!</h2>
          <p>
            {isLogin ? "Please login to continue" : "Create an account to get started"}
          </p>
        </div>

        {/* Right side of the modal */}
        <div className="modal-right">
          {isLogin ? (
            <div className="auth-form">
              <h2>Login</h2>
              {isEmailLogin ? (
                <form onSubmit={handleEmailLoginSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth-input"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth-input"
                    required
                  />
                  <button className="auth-button" type="submit">Login</button>
                </form>
              ) : (
                <>
                  <button className="auth-button" onClick={handleGoogleSignIn}>
                    Login with Google
                  </button>
                  <button className="auth-button" onClick={handleEmailLogin}>
                    Login with Email
                  </button>
                </>
              )}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <p>
                New to Mandapam?{" "}
                <span className="link" onClick={switchToSignup}>
                  Register Here
                </span>
              </p>
            </div>
          ) : (
            <div className="auth-form">
              <h2>Sign Up</h2>
              {isEmailSignUp ? (
                <form onSubmit={handleEmailSignUp}>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="auth-input"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="auth-input"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth-input"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="auth-input"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="auth-input"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth-input"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="auth-input"
                    required
                  />
                  <button className="auth-button" type="submit">Sign Up</button>
                </form>
              ) : (
                <>
                  <button className="auth-button" onClick={handleGoogleSignIn}>
                    Sign up with Google
                  </button>
                  <button className="auth-button" onClick={initiateEmailSignUp}>
                    Sign up with Email
                  </button>
                </>
              )}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <p>
                Already have an account?{" "}
                <span className="link" onClick={switchToLogin}>
                  Login Here
                </span>
              </p>
            </div>
          )}
        </div>
        {/* Close button */}
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
