// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Py-mgUkB8cpYHSeiDS2-vLkAb8evesM",
  authDomain: "kwitterbd-ec91b.firebaseapp.com",
  projectId: "kwitterbd-ec91b",
  storageBucket: "kwitterbd-ec91b.appspot.com",
  messagingSenderId: "328573513452",
  appId: "1:328573513452:web:d541d1aa1808a55c837fc9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
    msg = document.getElementById("msg").ariaValueMax;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.romoveItem("room_name");
    window.location.replace("index.html");
}