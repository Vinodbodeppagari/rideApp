import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import BottomTab from '../navigation/Bottomtabs'
export default function SplashScreen({ navigation }) {

  const [token, setToken] = useState(null);

  useEffect(() => {
    getToken()
  
    return () => {

    };
  }, []);

  const getToken = async (response) => {
   
    let token = await AsyncStorage.getItem("token");
    console.log("token==", token === null);
    navigation.navigate("LoginScreen");
      token == null ? navigation.navigate("LoginScreen") : navigation.navigate("BottomTab");
  };
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <Text>SplashScreen</Text>
    </View>
  );
}
