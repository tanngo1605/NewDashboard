import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";

const TopicIcon = (props) => (
  <TouchableOpacity style={styles.container}>
    <Image style={styles.img} source={require("../../../assets/results.svg")} />
    <Text style={{fontWeight:'bold', fontFamily:'sans-serif'}}>{props.section}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    borderRadius: 10,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    
  },
  img: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
});

export default TopicIcon;
