import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Button, Alert, Modal, TextInput, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "../firebase/firebase";
import { collection, addDoc, onSnapshot, doc, setDoc, updateDoc } from "firebase/firestore";
const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState("");
  const [updateType, setUpdateType] = useState("");
  const female = require("../assets/female.jpg");
  const male = require("../assets/male.jpg");
  const blank = require("../assets/blank.png");
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [displayText, setDisplayText] = useState("Initial Value");

  const closeModal = async () => {
    

    setModalVisible(false);
  }
  const updateValue = async () => {
    switch (updateType) {
      case "firstName":
        updateValueFirstName();
        break;

      case "lastName":
        updateValueLastName();
        break;

      case "mobileNumber":
        updateValueMobileNumber();
        break;
      default:
        Alert.alert("NUMBER NOT FOUND");
    }
 
   }
  const updateValueEmail = async () => {
    await updateDoc(doc(db, "users", email?.toLowerCase()), {
      email: inputValue,
    });

    setInputValue("");

    setModalVisible(false);
  };
  
  const updateValueFirstName = async () => {
    await updateDoc(doc(db, "users", email?.toLowerCase()), {
      firstName: inputValue,
    });
    setInputValue("");

    setModalVisible(false);
  };
  const updateValueLastName = async () => {
    await updateDoc(doc(db, "users", email?.toLowerCase()), {
      lastName: inputValue,
    });
    setInputValue("");

    setModalVisible(false);
  };
  const updateValueMobileNumber = async () => {
    await updateDoc(doc(db, "users", email?.toLowerCase()), {
      mobileNumber: inputValue,
    });
    setInputValue("");

    setModalVisible(false);
  };
  const updateGenderFemale = async () => {
    await updateDoc(doc(db, "users", email?.toLowerCase()), {
      gender: "Female",
    });
    setInputValue("");

    setModalVisible(false);
  };
  const updateGenderMale = async () => {
    await updateDoc(doc(db, "users", email?.toLowerCase()), {
      gender: "Male",
    });
    setInputValue("");

    setModalVisible(false);
  };
  
  
  useEffect(() => {
    getUserData();
  }, [email]);

  useEffect(() => {
    const docRef = collection(db, "users");
    const reciveData = onSnapshot(docRef, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((item) => {
        data.push({
          id: item.id,
          ...item.data(),
        });
      });
      const result = data.find((obj) => obj?.email?.toLowerCase() === email?.toLowerCase());
      console.log(result);
      setUser(result);
      setAvatar(result?.gender);
    });

    return () => reciveData();
  }, [avatar, modalVisible]);
  
  const getUserData = async () => {
    const UserDetails = await AsyncStorage.getItem("UserDetails");
    setUserData(JSON.parse(UserDetails));

    setEmail(userData.email);
  };
 
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: "10%" }}>
        <Image
          source={avatar == "Female" ? female : avatar == "Male" ? male : blank}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <Text style={styles.text}>Welcome</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setUpdateType('firstName')
          }}
        >
          <Text style={styles.text}>{user?.firstName}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            // 
            
            setUpdateType('lastName')
          }}
          style={{ marginLeft: 5 }}
        >
          <Text style={styles.text}>{user?.lastName}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
             setUpdateType('mobileNumber')
        }}
      >
        <Text style={styles.text}>{user?.mobileNumber}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
          setUpdateType('gender')
        }}
      >
        <Text style={styles.text}>{user?.gender}</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
          // setUpdateType('email')
        }}
      > */}
        <Text style={[styles.text,{color:'red'}]}>{email}</Text>
      {/* </TouchableOpacity> */}

    
  
      <Modal
        visible={modalVisible}
        animationType='slide'
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {updateType === "gender" ? (
            <View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => updateGenderMale("Male")}>
                  <Text style={styles.gender}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateGenderFemale("Female")}>
                  <Text style={styles.gender}>Female</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.button}>Close</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setInputValue(text)}
                value={inputValue}
                placeholder='Enter new value'
              />

              <TouchableOpacity onPress={updateValue}>
                <Text style={styles.button}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.button}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  gender: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  button: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "orange",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
});
export default ProfileScreen;
