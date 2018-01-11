import *as firebase from "firebase";
// import * as admin from "firebase-admin"
var config = {
    apiKey: "AIzaSyBFD6eyb5x7XhqUYs9S74uddJrgKN-SCsY",
    authDomain: "testux-a1273.firebaseapp.com",
    databaseURL: "https://testux-a1273.firebaseio.com",
    projectId: "testux-a1273",
    storageBucket: "testux-a1273.appspot.com",
    messagingSenderId: "458691747929"
  };
  firebase.initializeApp(config);

export var dbRef = firebase.database().ref()
export var firebaseAuth = firebase.auth
export var user = firebase.auth().currentUser;
// export const user = firebase.auth().currentUser
// export const GoogleAuth = new firebase.auth.GoogleAuthProvider()
// export const FacebookAuth = new firebase.auth.FacebookAuthProvider()
// export const TwitterAuth = new firebase.auth.TwitterAuthProvider()
// export const GithubAuth = new firebase.auth.GithubAuthProvider()
// export const storage = firebase.app().storage()