import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { signInWithEmailAndPassword, auth } from "../firebase/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageBackground } from "react-native";
import Loader from "../components/Loader";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getToken()
    return () => {

    };
  }, []);

  const getToken = async (response) => {
    try {
      let token = await AsyncStorage.getItem("token");
      console.log(token);
      if (token !== null) {
        // setToken(token)
        navigation.navigate("BottomTab");
      } else {
        setToken('')
      }

    } catch (e) {
      // saving error
    }
  };
  const handleLogin = async () => {
    if (email.trim().length === 0) {
      Alert.alert("Input Error", "Email cannot be empty");
    } else if (password.trim().length === 0) {
      Alert.alert("Input Error", "Password cannot be empty");
    } else {
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          setData(response);
        })
        .catch((error) => {
          console.log("error==", error);
          Alert.alert("error: " + error.code);
        });
    }
  };

  const setData = async (response) => {
    setIsLoading(false);
    await AsyncStorage.setItem("token", JSON.stringify(response._tokenResponse.idToken));
    await AsyncStorage.setItem("UserDetails", JSON.stringify(response.user));


    let savedToken = await AsyncStorage.getItem("UserDetails");
    console.log(savedToken);
    Alert.alert("Login Successful");
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("BottomTab");
    }, 1000);

  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://curlytales.com/wp-content/uploads/2020/08/carrr.jpg",
        }}
        style={{ width: "111%", height: "110%" }}
      >
        <View style={{ justifyContent: 'center', alignSelf: 'center', width: '100%', paddingTop: "40%" }}>
          <Text style={styles.heading}>Travel Share</Text>
          <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail} value={email} />
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignupScreen")}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          {isLoading ? (
            <View style={{ position: "absolute" }}>
              <Loader />
            </View>
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    color: "white"
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
    color: "black",
    backgroundColor: "white"
  },
  button: {
    width: "70%",
    height: 50,
    backgroundColor: "#2196f3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
    color: "white",
    marginLeft: 60
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
