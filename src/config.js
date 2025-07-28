import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, signInWithPopup, 
  signInWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaduu8V1lD6qUO4jVksayKnz-cmHogDvc",
  authDomain: "fir-login-f5df0.firebaseapp.com",
  projectId: "fir-login-f5df0",
  storageBucket: "fir-login-f5df0.firebasestorage.app",
  messagingSenderId: "445136820456",
  appId: "1:445136820456:web:8d919c917ce110a681915d",
  measurementId: "G-RTBHCNJ0YS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// HANDLE GOOGLE LOGIN
const handleGoogleLogin = async (setError) => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log('Google Sign-In:', result.user);
        setError('');
    } catch (err) {
        console.log(err);
        setError('Google Sign-In failed');
    }
}

// HANDLE LOGIN USING EMAIL AND PASSWORD
const handleSubmit = async (e, setError) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCred.user);
        setError('');
    } catch (err) {
        console.log(err);
        setError('Invalid email or password');
    }
    e.target.reset();
}

export { auth, googleProvider, handleGoogleLogin, handleSubmit }