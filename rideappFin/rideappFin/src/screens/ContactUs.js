import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";

const UserInfo = ({ }) => {
  const email = "bodeppav@mail.gvsu.edu";
  const mobileNumber = "+16166665128";
  const email1 = "thotama@mail.gvsu.edu";
  const mobileNumber1 = "+919502173446";
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${email}`);
    Linking.openURL(`mailto:${email1}`)
  };

  const handleCallPress = () => {
    Linking.openURL(`tel:${mobileNumber}`);
    Linking.openURL(`tel:${mobileNumber1}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TouchableOpacity onPress={handleEmailPress}>
        <Text style={styles.value}>{email}</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Mobile Number:</Text>
      <TouchableOpacity onPress={handleCallPress}>
        <Text style={styles.value}>{mobileNumber}</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Email:</Text>
      <TouchableOpacity onPress={handleEmailPress}>
        <Text style={styles.value}>{email1}</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Mobile Number:</Text>
      <TouchableOpacity onPress={handleCallPress}>
        <Text style={styles.value}>{mobileNumber1}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    padding: 16,
    backgroundColor: "white",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default UserInfo;
