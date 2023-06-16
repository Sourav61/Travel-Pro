import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCM4W5XAzRrM9V6XSzT0MxnQ6CyyI2so4o",
    authDomain: "flight-booking-2edd3.firebaseapp.com",
    projectId: "flight-booking-2edd3",
    storageBucket: "flight-booking-2edd3.appspot.com",
    messagingSenderId: "558439509587",
    appId: "1:558439509587:web:21e7a2544e2851eb93e0a6",
    measurementId: "G-6J2QREGE72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)