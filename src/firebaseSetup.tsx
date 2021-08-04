import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/storage';

firebase.initializeApp({
    apiKey: 'AIzaSyA_IhaGk_bK8Spg47cgTQKHHpjOgPvrOHw',
    authDomain: 'sharestuff-d12fe.firebaseapp.com',
    projectId: 'sharestuff-d12fe',
    storageBucket: 'sharestuff-d12fe.appspot.com',
    messagingSenderId: '680961961750',
    appId: '1:680961961750:web:28fb3b6c05fc9d3de5ea37',
    measurementId: 'G-DWJ2W19HCE',
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();
export const storage = firebase.storage();

console.log({ auth, firestore, storage });
