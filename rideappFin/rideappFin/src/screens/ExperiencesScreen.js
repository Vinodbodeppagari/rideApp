import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Button, Modal, Alert } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { height } from "../utils/const";
import { db } from "../firebase/firebase";
const ExperiencesScreen = ({ navigation }) => {
  const [experiences, setExperiences] = useState([]);
  const isFocused = useIsFocused();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
 
     const docRef = collection(db, "experiences");
    const reciveData = onSnapshot(docRef, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((item) => {
        data.push({
          id: item.id,
          ...item.data(),
        });
      });
      setExperiences(data)
    });

    return () => reciveData();
  }, []);
  const handlePost = async () => {
    setModal(true)
    try {
      const docRef = await addDoc(collection(db, "experiences"), {
        title: title,
        description: description,
        name: name,
        date: new Date().toDateString()
      
      });
      Alert.alert("Experience Added Succesfully")
      setModal(false)
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      Alert.alert('Something went wronf', e)
      console.error("Error adding document: ", e);
    }
  };

  const renderExperience = ({ item }) => {
    console.log(item?.date)
    return (
      <View style={styles.card}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text style={{ color: "#aaa", marginTop: 10 }}>{`By ${item.name}`}</Text>
        <Text style={{ color: "#aaa", marginTop: 10 }}>{`At ${item?.date}`}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {
        experiences.length ==0 ? <Text style={{fontSize:22, alignSelf:'center', marginTop:height/2}}> No experiences are there</Text>:
          <FlatList
            ListHeaderComponent={()=> <Text style={{marginTop:40, alignSelf:'center', marginBottom:15, fontSize:20}}>Experiences</Text>}
        data={experiences}
        renderItem={renderExperience}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      }
      <View style={{position:'absolute', bottom:'5%', alignSelf:'center',}}>
        <Button title="Post an Experience" onPress={() => setModal(true)} />
      </View>
     
        <Modal visible={modal} animationType="slide">
          <View style={styles.containerModal}>
            <Text style={styles.header}>Post an Experience</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={title}
            onChangeText={(txt) => setTitle(txt)}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={description}
            onChangeText={(txt) => setDescription(txt)}
              multiline
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
            onChangeText={(txt) => setName(txt)}
              multiline
            />
            <TouchableOpacity style={styles.button} onPress={handlePost}>
              <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.close} onPress={() => setModal(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    </View>
  );
};

export default ExperiencesScreen;

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 12,
  },
  containerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
   
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#F9A825',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    width: '80%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
})