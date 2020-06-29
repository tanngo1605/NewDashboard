import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import AttendanceRatio from "../components/AttendanceRatio/AttendanceRatio";
import TopicList from "../components/TopicList/TopicList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      
      <Header navigation = {props.navigation} />
      <ScrollView>
        <AttendanceRatio />
        <TopicList />
      </ScrollView>
      <Footer />
    </View>
  );
};

export default HomeScreen;
