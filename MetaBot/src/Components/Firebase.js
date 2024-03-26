import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDAvtRaljvJFxWlxFA67aLDJJgtruhpsgs",
    authDomain: "first-51320.firebaseapp.com",
    projectId: "first-51320",
    storageBucket: "first-51320.appspot.com",
    messagingSenderId: "1082363138180",
    appId: "1:1082363138180:web:c02150b03560ec091972d1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);