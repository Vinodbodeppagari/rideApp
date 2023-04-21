
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './src/navigation/stackNavigation'
import { NavigationContainer } from '@react-navigation/native';





export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
