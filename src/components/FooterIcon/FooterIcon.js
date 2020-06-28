import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const FooterIcon = (props) => (
  <TouchableOpacity style={styles.container}>
    <Image style={{height:20, width:20}} source={require('../../../assets/message.svg')} />
    <Text style={{color: 'white'}}>{props.section}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FooterIcon;