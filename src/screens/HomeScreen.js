import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import AttendanceRatio from "../components/AttendanceRatio/AttendanceRatio";
import TopicList from "../components/TopicList/TopicList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const HomeScreen = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView>
        <AttendanceRatio />
        <TopicList />
      </ScrollView>
      <Footer />
    </View>
  );
};

export default HomeScreen;
