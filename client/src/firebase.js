import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FB_API}`,
  authDomain: `${process.env.REACT_APP_FB_AUTH}`,
  projectId: `${process.env.REACT_APP_FB_PROJECT}`,
  storageBucket: `${process.env.REACT_APP_FB_STORAGE}`,
  messagingSenderId: `${process.env.REACT_APP_FB_ID}`,
  appId: `${process.env.REACT_APP_FB_MESSAGE_ID}`
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);