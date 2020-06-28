import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Header = (props) => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Image style={{height:25, width:25,  backgroundColor:'#00044b'}} source={require('../../../assets/menu.svg')}  />
      <Text style={{color:'white', fontSize:20, marginLeft:5, fontFamily:'sans-serif'}}>Bal Bharati Public School</Text>
      <Image style={{height:25, width:25, marginLeft: 'auto'}} source={require('../../../assets/Bell.svg')} />
    </View>
    <View style={styles.avatarSection}>
      <Image style={styles.avatar} source={require('../../../assets/studentAvatar.svg')} />
      <View style={styles.userInfor}>
        <Text style={{color: 'white', fontSize:15,fontWeight:'bold', fontFamily:'sans-serif'}}>Akhil</Text>
        <Text style={{color: 'yellow', fontSize:15, fontFamily:'sans-serif'}}>Class IV</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#00044b',
        width: '100vw'
    },
    title:{
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarSection:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10
       
    },
    avatar:{
        height: 70,
        width: 70,
        borderRadius: 50
    },
    userInfor:{
        marginLeft: 20
    }

})

export default Header;
