import React, { useState } from "react";

import {
  View,
  Text,
  Picker,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const SchoolCodeScreen = (props) => {
  const [selectedValue, setSelectedValue] = useState("admin");
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, color: "#00044b", margin:120 }}>EDUFLOW</Text>

      <View style={styles.inputForm}>
        <Text style={{fontFamily:'sans-serif', fontWeight:'bold'}}>SCHOOL CODE</Text>
        <TextInput style={styles.input} placeholder="Enter School code" />
        <Picker
          selectedValue={selectedValue}
          style={styles.input}
          
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="Teacher" value="teacher" />
          <Picker.Item label="Student" value="student" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color:'white'}}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputForm: {
    alignItems: "flex-start",
    width: "90vw",
  },
  input: {
    height: 40,
    width: "100%",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    borderRadius: 10,
    marginBottom: 30,
    backgroundColor:'white'
  },
  btn:{
      backgroundColor: '#00044b',
      borderRadius: 10,
      width: 150,
      height:30,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 35
  }
});


export default SchoolCodeScreen;