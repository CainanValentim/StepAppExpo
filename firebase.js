import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHoxndIuyXRuX1Wb7d0Bbfh9svAcj2PJw",
  authDomain: "stepapp-72315.firebaseapp.com",
  projectId: "stepapp-72315",
  storageBucket: "stepapp-72315.appspot.com",
  messagingSenderId: "149105353756",
  appId: "1:149105353756:web:9d44c00a9e03e58f4a6bd9",
  measurementId: "G-VG08FV0KSF",
};

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
