// import { View, Text, TouchableOpacity, Image, Platform, StyleSheet } from "react-native";
// import React from "react";
// import { Ionicons } from "@expo/vector-icons";
// const size = 24;
// const activeTintColor = "tomato";
// const inactiveTintColor = "gray";
// export default function Bottomtab({ isFocused1, isFocused2, isFocused3, isFocused4, navigation }) {
//   return (
//     <View
//       style={{
//         borderTopWidth: 1,
//         height: 50,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingHorizontal: 12,
//         backgroundColor: "white",
//         paddingVertical: 8,
//         borderColor: "#cccc",
//         width: "100%",
//         position: "absolute",
//         bottom:Platform.OS=='ios'?30: 0,
//       }}
//     >
//       <TouchableOpacity onPress={() => navigation.navigate("RidesScreen")} style={styles.tab}>
//         <Ionicons
//           name={isFocused1 ? "ios-car" : "ios-car-outline"}
//           size={size}
//           color={isFocused1 ? activeTintColor : inactiveTintColor}
//         />
//         <Text>Rides</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate("Experiences")} style={styles.tab}>
//         <Ionicons
//           name={isFocused2 ? "ios-globe" : "ios-globe-outline"}
//           size={size}
//           color={isFocused2 ? activeTintColor : inactiveTintColor}
//         />
//         <Text>Experiences</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate("OfferRide")} style={styles.tab}>
//         <Ionicons
//           name={isFocused3 ? "ios-add-circle" : "ios-add-circle-outline"}
//           size={size}
//           color={isFocused3 ? activeTintColor : inactiveTintColor}
//         />
//         <Text>Offer Ride</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.tab}>
//         <Ionicons
//           name={isFocused4 ? "ios-person" : "ios-person-outline"}
//           size={size}
//           color={isFocused4 ? activeTintColor : inactiveTintColor}
//         />
//         <Text>Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   tab: { height: 35, justifyContent: "center", alignItems: 'center' }
// })