import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAhBqvvTUi1930lvyyBf5rsm7IMZ9Fc4ZY",
    authDomain: "unichat-b3381.firebaseapp.com",
    projectId: "unichat-b3381",
    storageBucket: "unichat-b3381.appspot.com",
    messagingSenderId: "115671995937",
    appId: "1:115671995937:web:22b9f75d0d667f88d0b560",
  })
  .auth();
