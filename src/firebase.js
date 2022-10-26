// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUaTD0trGv3vUeuu-FVGM7IwP7RNBGOsc",
    authDomain: "devcamp-r25-3124e.firebaseapp.com",
    projectId: "devcamp-r25-3124e",
    storageBucket: "devcamp-r25-3124e.appspot.com",
    messagingSenderId: "679178019398",
    appId: "1:679178019398:web:e4ae37c4d3fd428298a047"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);



export default auth;