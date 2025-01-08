// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBS6PyQMFmD2rFvzFdH5Y5XUvLLJMjJKZo',
  authDomain: 'coffee-5e4eb.firebaseapp.com',
  projectId: 'coffee-5e4eb',
  storageBucket: 'coffee-5e4eb.firebasestorage.app',
  messagingSenderId: '260198587147',
  appId: '1:260198587147:web:20389baa60ac39422e200e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
