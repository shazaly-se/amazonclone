import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCG9w0e87M1xmca307NiSujA-IYHP-K5Kc",
    authDomain: "clone-ed4ad.firebaseapp.com",
    databaseURL: "https://clone-ed4ad.firebaseio.com",
    projectId: "clone-ed4ad",
    storageBucket: "clone-ed4ad.appspot.com",
    messagingSenderId: "141655719590",
    appId: "1:141655719590:web:2764a718331f2cd6cfbe67",
    measurementId: "G-7V93SEBZXZ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export {auth};