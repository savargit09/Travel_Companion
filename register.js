import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

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
  const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Account created successfully!");
        signupForm.reset();
      })
      .catch((error) => {
        alert(error.message);
      })
        .finally(() => {
      signupForm.reset();
    });
  });
});
