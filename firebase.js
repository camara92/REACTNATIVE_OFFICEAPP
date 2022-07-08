// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from 'firebase'; 
//import firebase from 'firebase'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj9shoh9FVO2YQg7jsLjyuzDASaLqANxU",
  authDomain: "authentificationmyoffice.firebaseapp.com",
  projectId: "authentificationmyoffice",
  storageBucket: "authentificationmyoffice.appspot.com",
  messagingSenderId: "310470927659",
  appId: "1:310470927659:web:56d864acfd1ac08657116e"
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