import React from "react";
import { View, StyleSheet } from "react-native";
import FooterIcon from "../FooterIcon/FooterIcon";
const sections = ["Home", "Attendance", "Profile", "Messages"];
const Footer = (props) => (
  <View style={styles.container}>
    {sections.map((section) => (
      <FooterIcon section={section} />
    ))}
  </View>
);


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#00044b',
        width: '100vw',
        height: 50
    }
})


export default Footer;