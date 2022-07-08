// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import * as firebase from 'firebase'; 

import  * as firebase from 'firebase'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 
  apiKey: "AIzaSyDgql3PUYM-p6QDuVx3NJkrvowlMfwfqP4",
  authDomain: "fir-connect-e70d6.firebaseapp.com",
  projectId: "fir-connect-e70d6",
  storageBucket: "fir-connect-e70d6.appspot.com",
  messagingSenderId: "939054997593",
  appId: "1:939054997593:web:8d14f1c67f6d7e49cad148"
};

// Initialize Firebase
let app; 
if(firebase.apps.length===0){
    app= firebase.initializeApp(firebaseConfig);
}else{
    app= firebase.app()
}
const auth = firebase.auth(); 

export { auth }; 