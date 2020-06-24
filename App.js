import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import AttendanceRatio from "./components/AttendanceRatio/AttendanceRatio";
import TopicList from "./components/TopicList/TopicList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
     
        <ScrollView>
          <AttendanceRatio />
          <TopicList />
        </ScrollView>
      
      <Footer />
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
