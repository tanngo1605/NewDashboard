import React from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";

const utils = [
  "Raise a ticket",
  "Add an account",
  "Settings",
  "Rate us",
  "Feedback",
  "Help",
  "Log out",
];

const UtilScreen = (props) => (
  <View style={styles.container}>
    <Image
      source={require("../../assets/studentAvatar.svg")}
      style={styles.avatar}
    />

    <Text style={{color: 'white', fontFamily: 'sans-serif', fontWeight:'bold', fontSize:17}}>Akhil</Text>
    <Text style={{color: 'yellow', fontFamily: 'sans-serif', }}>Class IV</Text>
    <View style={{alignItems: 'flex-start'}}>
    {utils.map((util, key) => (
      <TouchableOpacity key={key} style={styles.util}>
        <Image style={styles.icon} source={require("../../assets/message.svg")} />
        <Text style={{marginLeft: 40, color:'white', fontSize:17, fontWeight: 'bold'}}>{util}</Text>
      </TouchableOpacity>
    ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#00044b',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        flex: 1
    },
    avatar:{
        height: 100,
        width: 100,
        borderRadius: 50,
        margin:20
    },
    util:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    icon:{
        height: 25,
        width: 25
    }

})





export default UtilScreen;
