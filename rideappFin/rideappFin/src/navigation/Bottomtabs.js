import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import RidesScreen from "../screens/RideSelectionScreen";
import OfferingRideScreen from "../screens/OfferingRideScreen";
import ExperiencesScreen from "../screens/ExperiencesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FaqScreen from "../screens/FaqScreen";
import ContactUs from "../screens/ContactUs";
import TermsScreen from "../screens/Terms&Conditions";

const Tab = createBottomTabNavigator();
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Drawer = createDrawerNavigator();

function Logout({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", width: "80%", alignSelf: "center" }}>
      <Button title='Logout' onPress={async () => {
        await AsyncStorage.removeItem("token");
        navigation.navigate("LoginScreen");
      }} />
    </View>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name='Rides Screen' component={RidesScreen} />
      <Drawer.Screen name='FAQs' component={FaqScreen} />
      <Drawer.Screen name='Contact Us' component={ContactUs} />
      <Drawer.Screen name='Terms&Conditions' component={TermsScreen} />
      <Drawer.Screen name='Logout' component={Logout} />
      {/* <Drawer.Screen name='Contact Us' component={ContactUs} />
      <Drawer.Screen name='Terms & Conditions' component={Terms} />
      <Drawer.Screen name='Privacy Policy' component={PrivacyPolicy} />

      <Drawer.Screen name='Logout' component={Logout} /> */}
    </Drawer.Navigator>
  );
}
function App() {
  const size = 24;
  const activeTintColor = "tomato";
  const inactiveTintColor = "gray";
  return (
    <Tab.Navigator
      initialRouteName='RidesScreen'
      screenOptions={{
        activeTintColor: "#42f44b",
      }}
    >
      <Tab.Screen
        name='RidesScreen'
        component={MyDrawer}
        options={{
          headerShown: false,
          tabBarLabel: "Rides",
          tabBarActiveTintColor: activeTintColor,
          tabBarInactiveTintColor: inactiveTintColor,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ios-car" : "ios-car-outline"}
              size={size}
              color={focused ? activeTintColor : inactiveTintColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name='OfferingRideScreen'
        component={OfferingRideScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Offer Ride",
          tabBarActiveTintColor: activeTintColor,
          tabBarInactiveTintColor: inactiveTintColor,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ios-add-circle" : "ios-add-circle-outline"}
              size={size}
              color={focused ? activeTintColor : inactiveTintColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name='ExperiencesScreen'
        component={ExperiencesScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Experiences",
          tabBarActiveTintColor: activeTintColor,
          tabBarInactiveTintColor: inactiveTintColor,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ios-globe" : "ios-globe-outline"}
              size={size}
              color={focused ? activeTintColor : inactiveTintColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarActiveTintColor: activeTintColor,
          tabBarInactiveTintColor: inactiveTintColor,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ios-person" : "ios-person-outline"}
              size={size}
              color={focused ? activeTintColor : inactiveTintColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
