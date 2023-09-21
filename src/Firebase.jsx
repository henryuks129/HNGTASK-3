import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  // authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_REACT_APP_APP_ID,
  
  apiKey: "AIzaSyDnzK7ISKT5QQLr9z09bdpjIBKC0yi-tJ0",
  authDomain: "auth-development-aac6b.firebaseapp.com",
  projectId: "auth-development-aac6b",
  storageBucket: "auth-development-aac6b.appspot.com",
  messagingSenderId: "1057199416387",
  appId: "1:1057199416387:web:4520fdfadfe5acef0120f6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)