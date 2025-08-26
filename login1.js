import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBEjrqcPbYym6TKfXC_JsTu-dg8y1ZYMFs",
  authDomain: "travel-auth-b8d11.firebaseapp.com",
  projectId: "travel-auth-b8d11",
  storageBucket: "travel-auth-b8d11.firebasestorage.app",
  messagingSenderId: "578734265482",
  appId: "1:578734265482:web:9d5f338af0fd8b10638973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login successful!");
        loginForm.reset();
        // Optionally redirect:
        // window.location.href = "landing.html";
      })
      .catch((error) => {
        alert(error.message);
      })
    .finally(() => {
      loginForm.reset();
    });
  });
});
