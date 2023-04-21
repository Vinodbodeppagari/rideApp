// // import firebase from "firebase/app";
// // import "firebase/auth";
// import * as firebase from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBB80g19As2UHt7g5ekR3xTK1rxREU56H0",
//   authDomain: "mytravelapp-6c53e.firebaseapp.com",
//   projectId: "mytravelapp-6c53e",
//   storageBucket: "mytravelapp-6c53e.appspot.com",
//   messagingSenderId: "166111924693",
//   appId: "1:166111924693:web:2103acf987290cc4356d5c",
//   measurementId: "G-CLCEB87KRQ",
// };

// // Initialize Firebase app
// firebase.initializeApp(firebaseConfig);

// // Export Firebase authentication methods
// // export const auth = firebase.auth();

// // Sign up function
// export const signUp = (email, password) => {
//   return auth.createUserWithEmailAndPassword(email, password);
// };

// // Sign in function
// export const signIn = (email, password) => {
//   return auth.signInWithEmailAndPassword(email, password);
// };

// // Sign out function
// export const signOut = () => {
//   return auth.signOut();
// };

// // Password reset function
// export const resetPassword = (email) => {
//   return auth.sendPasswordResetEmail(email);
// };

// // Password update function
// export const updatePassword = (password) => {
//   const user = auth.currentUser;
//   return user.updatePassword(password);
// };
