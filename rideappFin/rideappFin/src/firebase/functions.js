// import { db } from "./firebase";

// export const getExperiences = async () => {
//   const querySnapshot = await db.collection("experiences").get();
//   const experiences = [];
//   querySnapshot.forEach((doc) => {
//     experiences.push({
//       id: doc.id,
//       ...doc.data(),
//     });
//   });
//   return experiences;
// };

// export const addExperience = async (experience) => {
//   const docRef = await db.collection("experiences").add(experience);
//   return docRef.id;
// };

// export const getRides = async () => {
//   const querySnapshot = await db.collection("rides").get();
//   const rides = [];
//   querySnapshot.forEach((doc) => {
//     rides.push({
//       id: doc.id,
//       ...doc.data(),
//     });
//   });
//   return rides;
// };

// export const addRide = async (ride) => {
//   const docRef = await db.collection("rides").add(ride);
//   return docRef.id;
// };

// export const getRide = async (rideId) => {
//   const doc = await db.collection("rides").doc(rideId).get();
//   if (doc.exists) {
//     return { id: doc.id, ...doc.data() };
//   } else {
//     return null;
//   }
// };

// export const joinRide = async (rideId, userId) => {
//   const rideRef = db.collection("rides").doc(rideId);
//   await rideRef.update({
//     passengers: firebase.firestore.FieldValue.arrayUnion(userId),
//   });
// };

// export const createAccount = async (email, password) => {
//   const credential = await auth.createUserWithEmailAndPassword(email, password);
//   return credential.user;
// };

// export const signIn = async (email, password) => {
//   const credential = await auth.signInWithEmailAndPassword(email, password);
//   return credential.user;
// };

// export const signOut = async () => {
//   await auth.signOut();
// };
