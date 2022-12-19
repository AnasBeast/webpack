import generateMeme from "./generateMeme";
import { v4 as uuidv4 } from "uuid";
import './styles/main.scss';
import laughing from './assets/laughing.svg';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, handleVerifyEmail, sendEmailVerification, sendPasswordResetEmail  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDMANVe_yhK_zLP_me4h3CinIKqU1uhY9k",
    projectId: "wilco---production",
    storageBucket: "wilco---production.appspot.com",
    messagingSenderId: "404438257634",
    appId: "1:404438257634:ios:4e6428172b291dfdfb73bb",
    /* apiKey: "AIzaSyAtkYHA2cM7y80DuhssY8bpJsmyxRV51iI",
    authDomain: "wilco-7050.firebaseapp.com",
    databaseURL: "https://wilco-7050-default-rtdb.firebaseio.com",
    projectId: "wilco-7050",
    storageBucket: "wilco-7050.appspot.com",
    messagingSenderId: "145215275822",
    appId: "1:145215275822:web:379c9c5e67ad19e12070bf",
    measurementId: "G-BCJKNWQE33" */


}

initializeApp(firebaseConfig);
const auth = getAuth()
// sendEmailVerification(auth, "anasmta9@gmail.com")
signInWithEmailAndPassword(auth, "teemuairamo@gmail.com", "M1neral123").then((userCredential) => {
    const user = userCredential.user;
    /* if(!user.emailVerified){
        sendEmailVerification(auth.currentUser).then(() => {
            console.log("email sent", );
        })
    } */
    console.log("user", user.accessToken);
})



const laughImg = document.getElementById("laughImg")
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateMeme)

generateMeme()