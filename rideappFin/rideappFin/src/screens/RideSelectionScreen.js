import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking, TextInput } from "react-native";
import { db } from "../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

import { data, height, width } from "../utils/const";
import DropDownPicker from "react-native-dropdown-picker";
const RideSelectionScreen = ({ navigation }) => {
  const [rides, setRides] = useState([]);
  const [ridesTemp, setTempRides] = useState([]);

  const [Countryopen, setCountryOpen] = useState(false);
  const [CountryValue, setCountryValue] = useState(null);
  const [Countryitems, setCountryItems] = useState(data.countries);

  const [Stateopen, setStateOpen] = useState(false);
  const [StateValue, setStateValue] = useState(null);
  const [Stateitems, setStateItems] = useState(data.states);

  const [Cityopen, setCityOpen] = useState(false);
  const [CityValue, setCityValue] = useState(null);
  const [Cityitems, setCityItems] = useState(data.cities);

  useEffect(() => {
    getRides();

    // return () => reciveData();
  }, []);

  useEffect(() => {
    filterVlaues();

    return () => { };
  }, [CountryValue, StateValue, CityValue]);

  const filterVlaues = () => {
    const startCountryValueFilterd = data.countries.filter((country) => {
      return country.value == CountryValue;
    });
    const startStateValueFilterd = data.states.filter((states) => {
      return states.country == startCountryValueFilterd[0]?.value;
    });

    setStateItems(startStateValueFilterd);

    const startCityValueFilterd = data.cities.filter((city) => {
      return city.state == StateValue;
    });

    setCityItems(startCityValueFilterd);
  };

  const filterByCountry = () => {
    let finRides = rides.filter((item) => {
      return item.startingLocationCountry == CountryValue;
    });
    setRides(finRides);
  };
  const filterByState = () => {
    let finRides = rides.filter((item) => {
      return item.startingLocationState == StateValue;
    });

    setRides(finRides);
  };
  const filterByCity = () => {
    let finRides = rides.filter((item) => {
      return item.startingLocationCity == CityValue;
    });

    setRides(finRides);
  };
  const resetFiltes = () => {
    setCountryValue(null);
    setStateValue(null);
    setCityValue(null);
    getRides();
  };
  const applyFiltes = () => {
    if (CountryValue !== null && StateValue !== null && CityValue !== null) {
      console.log("3");
      filterByCity();
    } else if (CountryValue !== null && StateValue !== null) {
      console.log("2");

      filterByState();
    } else if (CountryValue !== null) {
      console.log("1");

      filterByCountry();
    }
  };
  const getRides = async () => {
    const docRef = collection(db, "rides");
    onSnapshot(docRef, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((item) => {
        data.push({
          id: item.id,
          ...item.data(),
        });
      });
      setRides(data);
      setTempRides(data);
    });
  };

  const getCityStartData = (item) => {
    let info = data.cities.find((val) => {
      return val.value == item.startingLocationCity;
    });
    return info?.label + ", " + info?.state + ", " + info?.country;
  };
  const getCityEndData = (item) => {
    let info = data.cities.find((val) => {
      return val.value == item.endLocationCity;
    });
    return info?.label + ", " + info?.state + ", " + info?.country;
  };
  return (
    <View style={styles.container}>
      <Text style={{ margin: 20, alignSelf: "center", fontSize: 18 }}>Ride List</Text>
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.header}>Filter by Country</Text>
        <View style={styles.filter}>
          <DropDownPicker
            open={Countryopen}
            value={CountryValue}
            items={Countryitems}
            setOpen={setCountryOpen}
            setValue={setCountryValue}
            setItems={setCountryItems}
            style={{ marginBottom: Countryopen ? (Countryitems.length > 2 ? 200 : 100) : 0 }}
          />
        </View>

        <Text style={styles.header}>Filter by State</Text>
        <View style={styles.filter}>
          <DropDownPicker
            open={Stateopen}
            value={StateValue}
            items={Stateitems}
            setOpen={setStateOpen}
            setValue={setStateValue}
            setItems={setStateItems}
            style={{ marginBottom: Stateopen ? (Stateitems.length > 2 ? 200 : 100) : 0 }}
          />
        </View>
        <Text style={styles.header}>Filter by city</Text>
        <View style={styles.filter}>
          <DropDownPicker
            open={Cityopen}
            value={CityValue}
            items={Cityitems}
            setOpen={setCityOpen}
            setValue={setCityValue}
            setItems={setCityItems}
            style={{ marginBottom: Cityopen ? (Cityitems.length > 2 ? 200 : 100) : 0 }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => applyFiltes()}>
          <Text style={styles.reset}>Apply Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => resetFiltes()}>
          <Text style={styles.reset}>Reset Filters</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={rides}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel:${item.number}`);
                }}
              >
                <Text style={styles.description}>{item.number}</Text>
              </TouchableOpacity>
              <Text style={styles.location}>
                {getCityStartData(item)} to {getCityEndData(item)}
              </Text>
              <Text style={styles.dates}>
                {new Date(item.fromDate.seconds * 1000).toLocaleDateString() +
                  " , " +
                  new Date(item.fromDate.seconds * 1000).toLocaleTimeString()}{" "}
                -{" "}
                {new Date(item.toDate.seconds * 1000).toLocaleDateString() +
                  " , " +
                  new Date(item.toDate.seconds * 1000).toLocaleTimeString()}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text style={styles.noData}>NO DATA FOUND</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "50%",
    height: 50,
    backgroundColor: "#2196f3",
    marginLeft: 100,
    borderRadius: 5,
    marginTop: 20,
    color: "white"
  },
  noData: {
    alignSelf: 'center',
    marginTop: '20%',
    fontSize: 20, fontWeight: 'bold'
  },
  reset: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "center",
  },
  header: {
    fontSize: 12,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: "10%",
  },
  filter: {
    width: "80%",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    minHeight: height,
    width: width,
    paddingTop: 20,
    // // paddingLeft: 40
  },
  clearFilterButton: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: "#007AFF",
    marginBottom: 16,
  },
  clearFilterButtonText: {
    color: "#fff",
  },
  textInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    width: "90%",
    alignSelf: "center",
  },
  ride: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  card: {
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: "#eee",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  dates: {
    fontSize: 14,
    color: "#666",
  },
});

export default RideSelectionScreen;
