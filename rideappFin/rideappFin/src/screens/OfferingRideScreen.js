import React, { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet, TextInput, ScrollView, Alert, LogBox, } from "react-native";
import { db, auth, getAdditionalUserInfo } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import Bottomtab from "../navigation/bottomtab";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import { useIsFocused } from "@react-navigation/native";
import { data, height, width } from "../utils/const";

export default function OfferingRideScreen({ navigation }) {
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState("date");
  const [pickerCity, setPickerCity] = useState("");
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");

  const [description, setDescription] = useState("");

  const [startCountryopen, setStartCountryOpen] = useState(false);
  const [startCountryValue, setStartCountryValue] = useState(null);
  const [startCountryitems, setStartCountryItems] = useState(data.countries);

  const [startStateopen, setStartStateOpen] = useState(false);
  const [startStateValue, setStartStateValue] = useState(null);
  const [startStateitems, setStartStateItems] = useState(data.states);

  const [startCityopen, setStartCityOpen] = useState(false);
  const [startCityValue, setStartCityValue] = useState(null);
  const [startCityitems, setStartCityItems] = useState(data.cities);

  const [endCountryopen, setEndCountryOpen] = useState(false);
  const [endCountryValue, setEndCountryValue] = useState(null);
  const [endCountryitems, setEndCountryItems] = useState(data.countries);

  const [endStateopen, setEndStateOpen] = useState(false);
  const [endStateValue, setEndStateValue] = useState(null);
  const [endStateitems, setEndStateItems] = useState(data.states);

  const [endCityopen, setEndCityOpen] = useState(false);
  const [endCityValue, setEndCityValue] = useState(null);
  const [endCityitems, setEndCityItems] = useState(data.cities);


  const [date, setDate] = useState("");

  useEffect(() => {
    filterData(startCountryValue, endCountryValue);
    return () => { };
  }, [startCountryValue, startCityValue, startStateValue, endCityValue, endStateValue, endCountryValue]);

  const filterData = (startCountryValue) => {
    const startCountryValueFilterd = data.countries.filter((country) => {
      return country.value == startCountryValue;
    });

    setEndCountryItems(startCountryValueFilterd);


    const startStateValueFilterd = data.states.filter((states) => {
      return states.country == startCountryValueFilterd[0]?.value;
    });

    const endStateValueFilterd = data.states.filter((states) => {
      return states.country == startCountryValueFilterd[0]?.value;
    });

    setStartStateItems(startStateValueFilterd);
    setEndStateItems(endStateValueFilterd);



    const startCityValueFilterd = data.cities.filter((city) => {
      return city.state == startStateValue;
    });
    const endCityValueFilterd = data.cities.filter((city) => {
      return city.state == endStateValue;
    });

    setStartCityItems(startCityValueFilterd);
    setEndCityItems(endCityValueFilterd);


  };

  const handlePress = async () => {
    try {
      const docRef = await addDoc(collection(db, "rides"), {
        startingLocationCity: startCityValue,
        startingLocationState: startStateValue,
        startingLocationCountry: startCountryValue,
        endLocationCity: endCityValue,
        endLocationState: endStateValue,
        endLocationCountry: endCountryValue,

        fromDate: fromDate,
        toDate: toDate,
        title: title,
        description: description,
        number: number,
      });

      setFromDate(new Date())
      setToDate(new Date())
      setShowPicker(false)
      setPickerMode("date")
      setPickerCity("")
      setTitle("")
      setNumber("")
      setDescription("")
      setStartCountryOpen(false)
      setStartCountryValue(null)
      setStartStateOpen(false)
      setStartStateValue(null)
      setStartCityOpen(false)
      setStartStateValue(null)

      setEndCountryOpen(false)
      setEndCountryValue(null)
      setEndStateOpen(false)
      setEndStateValue(null)
      setEndCityOpen(false)
      setEndStateValue(null)




      Alert.alert("Ride Added Succesfully");
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      Alert.alert("Something went wronf", e);
      console.error("Error adding document: ", e);
    }
  };



  const handlePicker = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    if (pickerMode === "date") {
      if (pickerCity === "from") {
        setFromDate(currentDate);
      } else {
        setToDate(currentDate);
      }
      setPickerMode("time");
      setShowPicker(true);
    } else {
      if (pickerCity === "from") {
        setFromDate(currentDate);
      } else {
        setToDate(currentDate);
      }
      setShowPicker(false);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
        <Text style={styles.label}>Contact number</Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={(text) => setNumber(text)}
          keyboardType='phone-pad'
          maxLength={15}
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          numberOfLines={2}
          value={description}
          onChangeText={(text) => setDescription(text)}
          maxLength={100}
        />
        <Text style={styles.header}>Select origin Country</Text>
        <DropDownPicker
          open={startCountryopen}
          value={startCountryValue}
          items={startCountryitems}
          setOpen={setStartCountryOpen}
          setValue={setStartCountryValue}
          setItems={setStartCountryItems}
          style={{ marginBottom: startCountryopen ? startCountryitems.length > 2 ? 200 : 100 : 0 }}
        />

        <Text style={styles.header}>Select origin State</Text>
        <DropDownPicker
          open={startStateopen}
          value={startStateValue}
          items={startStateitems}
          setOpen={setStartStateOpen}
          setValue={setStartStateValue}
          setItems={setStartStateItems}
          style={{ marginBottom: startStateopen ? startStateitems.length > 2 ? 200 : 100 : 0 }}
        />

        <Text style={styles.header}>Select origin city</Text>
        <DropDownPicker
          open={startCityopen}
          value={startCityValue}
          items={startCityitems}
          setOpen={setStartCityOpen}
          setValue={setStartCityValue}
          setItems={setStartCityItems}
          style={{ marginBottom: startCityopen ? startCityitems.length > 2 ? 200 : 100 : 0 }}
        />

        <Text style={styles.header}>Select destination country:</Text>
        <DropDownPicker
          open={endCountryopen}
          value={endCountryValue}
          items={endCountryitems}
          setOpen={setEndCountryOpen}
          setValue={setEndCountryValue}
          setItems={setEndCountryItems}
          style={{ marginBottom: endCountryopen ? endCountryitems.length > 2 ? 200 : 100 : 0 }}
        />
        <Text style={styles.header}>Select destination state:</Text>
        <DropDownPicker
          open={endStateopen}
          value={endStateValue}
          items={endStateitems}
          setOpen={setEndStateOpen}
          setValue={setEndStateValue}
          setItems={setEndStateItems}
          style={{ marginBottom: endStateopen ? endStateitems.length > 2 ? 200 : 100 : 0 }}
        />
        <Text style={styles.header}>Select destination city:</Text>
        <DropDownPicker
          open={endCityopen}
          value={endCityValue}
          items={endCityitems}
          setOpen={setEndCityOpen}
          setValue={setEndCityValue}
          setItems={setEndCityItems}
          style={{ marginBottom: endCityopen ? endCityitems.length > 2 ? 200 : 100 : 0 }}
        />
        <Text style={styles.header}>Select trip dates and times:</Text>
        <View style={styles.datesContainer}>
          <View>
            <Button
              title={"From Date"}
              onPress={() => {
                setPickerMode("date");
                setShowPicker(true);
                setPickerCity("from");
              }}
            />

            <Text> {fromDate ? fromDate.toDateString() + " , " + fromDate.toLocaleTimeString() : ""}</Text>
          </View>
          <Button
            title={"To Date"}
            onPress={() => {
              setPickerMode("date");
              setShowPicker(true);
              setPickerCity("to");
            }}
          />
          <Text> {toDate ? toDate.toDateString() + " , " + toDate.toLocaleTimeString() : ""}</Text>
          <View style={{ margin: 20 }}>
            {showPicker && (
              <DateTimePicker
                value={pickerCity === "from" ? fromDate : toDate}
                mode={pickerMode}
                is24Hour={true}
                display='default'
                onChange={handlePicker}
              />
            )}
          </View>
        </View>

        <View style={{ margin: 20 }}>
          <Button title='Offer Ride' onPress={handlePress} />
        </View>
        {/* <Bottomtab isFocused3={isFocused} navigation={navigation} /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
  },

  dropdownContainer: {
    width: 150,
    height: 40,
    marginHorizontal: 10,
  },
  dropdownStyle: {
    backgroundColor: "#fafafa",
  },
  dropdownItemStyle: {
    justifyContent: "flex-start",
  },
  dropdownLabelStyle: {
    fontSize: 16,
    color: "#000",
  },
  dropdownDropDownStyle: {
    backgroundColor: "#fafafa",
  },
  datesContainer: {
    // flexDirection: "row",
    // justifyContent: "space-around",
    alignSelf: "flex-start",
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    minHeight: height,
    width: width,
    padding: 20,
    paddingTop: 40,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  citiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cityButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
  cityButtonText: {
    fontSize: 16,
  },
  originCityButton: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  originCityButtonText: {
    color: "#fff",
  },
  destinationCityButton: {
    backgroundColor: "#dc3545",
    borderColor: "#dc3545",
  },
  destinationCityButtonText: {
    color: "#fff",
  },
  datesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
