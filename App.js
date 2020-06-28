import React from "react";
import {
  StyleSheet,
  Picker,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import HomeSreen from "./src/screens/HomeScreen";
import UtilScreen from "./src/screens/UtilScreen";
import LoginScreen from "./src/screens/LoginSreen";
import SchoolCodeSreen from './src/screens/SchoolCodeSreen';
export default function App() {
  return (
    <View style={styles.container}>
      {/*<HomeSreen />*/}
      {/*<UtilScreen />*/}
      {/* <LoginScreen />*/}
      <SchoolCodeSreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
