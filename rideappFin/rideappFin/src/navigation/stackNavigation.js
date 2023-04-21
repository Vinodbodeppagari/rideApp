import React, { useEffect, useState } from "react";

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import FaqScreen from "../screens/FaqScreen";
import RidesScreen from "../screens/RideSelectionScreen";
import BottomTab from './Bottomtabs'
import SplashScreen from '../screens/SplashScreen'
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false, animation: "none" }}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false, animation: "none" }}/>
      <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false, animation: "none" }}/>
      <Stack.Screen name="RidesScreen" component={RidesScreen} options={{ headerShown: false, animation: "none" }}/>
      <Stack.Screen name="FaqScreen" component={FaqScreen} options={{ headerShown: false, animation: "none" }}/>
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false, animation: "none" }}/>
   
    </Stack.Navigator>
  );
}

export default function App() {
 

  
  return <MyStack />;
   
}