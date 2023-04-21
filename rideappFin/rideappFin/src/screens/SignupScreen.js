import React, { useState, useContext } from "react";
import { View, Text, Alert, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword, auth, db } from "../firebase/firebase";

import { collection, addDoc, onSnapshot, doc, setDoc, updateDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../components/Loader";
import { ScrollView } from "react-native-gesture-handler";
const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState(null);
  const signUp = (email, password) => {
    if (firstName.trim().length === 0) {
      Alert.alert("Input Error", "First Name cannot be empty");
    } else if (lastName.trim().length === 0) {
      Alert.alert("Input Error", "Last Name cannot be empty");
    } else if (mobileNumber.trim().length === 0) {
      Alert.alert("Input Error", "Mobile Number cannot be empty");
    } else if (email.trim().length === 0) {
      Alert.alert("Input Error", "Email cannot be empty");
    } else if (password.trim().length === 0) {
      Alert.alert("Input Error", "Password cannot be empty");
    } else {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
           
          setData(response);
        })
        .catch((error) => {
          Alert.alert("error: " + error.code);
          console.log(error);
        });
    }
  };

   const handleGenderSelection = (selectedGender) => {
     setGender(selectedGender);
   };
  
  const setData = async (response) => {
      await setDoc(doc(db, "users", email.toLowerCase()), {
        firstName: firstName,
        lastName: lastName,
        mobileNumber: mobileNumber,
        email: email,
        gender: gender,
        date: new Date().toDateString(),
      });
    try {
      Alert.alert("Success: " + response.user.email + " has been created");
      await AsyncStorage.setItem("token", JSON.stringify(response._tokenResponse.idToken));
      await AsyncStorage.setItem("UserDetails", JSON.stringify(response.user));
      setTimeout(() => {
        navigation.navigate("BottomTab");
        setIsLoading(false);
      }, 1000);
    } catch (e) {
      // saving error
    }
  };
  const handleSignUp = () => {
    signUp(email, password);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create an account</Text>

      <TextInput
        style={styles.input}
        placeholder='First Name'
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Last Name'
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Mobile no'
        value={mobileNumber}
        keyboardType='numbers-and-punctuation'
        onChangeText={(text) => setMobileNumber(text)}
      />
      <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={(text) => setEmail(text)} />
      <View style={{ alignSelf: "center" }}>
        <Text style={styles.title}>Select Your Gender</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={[styles.genderOption, gender === "Male" ? styles.selectedGender : null]}
            onPress={() => handleGenderSelection("Male")}
          >
            <Text style={styles.genderText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, gender === "Female" ? styles.selectedGender : null, { marginLeft: "20%" }]}
            onPress={() => handleGenderSelection("Female")}
          >
            <Text style={styles.genderText}>Female</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.selectedGenderText}>Selected Gender: {gender ? gender : "Not selected"}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {isLoading ? <Loader /> : null}
      <View>
        <TouchableOpacity onPress={handleSignUp} style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")} style={styles.loginButton}>
          <Text style={styles.signupButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 16,
    alignSelf: "center",
    marginTop:'10%'
  },
  genderOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: "#eee",
    marginVertical: 8,
  },
  selectedGender: {
    backgroundColor: "#007AFF", // Customize the selected option color
  },
  genderText: {
    fontSize: 18,
    color: "#333",
  },
  selectedGenderText: {
    fontSize: 16,
    marginVertical: 16,
  },
  signupButton: {
    backgroundColor: "#007aff",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  loginButton: {
    backgroundColor: "#007aff",
    padding: 10,
    borderRadius: 5,
    marginTop: "5%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  signupButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#fff",
  },

  input: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#eee",
    borderRadius: 12,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignupScreen;
