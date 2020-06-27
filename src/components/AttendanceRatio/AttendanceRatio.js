import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PieChart from "../MyPieChart/MyPieChart";
const AttendanceList = (props) => (
  <View style={styles.container}>
    <Text style={styles.header}>Attendance</Text>
    <TouchableOpacity style={styles.content}>
      <View style={styles.chart}>
        <PieChart />
        <Text style={{ color: "green", fontWeight: "bold", fontSize:17, fontFamily:'sans-serif' }}>75%</Text>
      </View>

      <View style={styles.legend}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.legendGreen}></View>
          <Text style={{fontFamily:'sans-serif'}}>Present</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.legendRed}></View>
          <Text style={{fontFamily:'sans-serif'}}>Absent</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "90vw",
    marginTop: 20,
    marginLeft: 18
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily:'sans-serif',
    fontWeight: 'bold'
  },
  content: {
    backgroundColor: "#f5f5f5",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
  },
  chart: {
    justifyContent: "center",
    alignItems: "center",
  },

  legend: {
    justifyContent: "center",
  },
  legendGreen: {
    width: 30,
    height: 15,
    backgroundColor: "green",
    margin: 10,
  },
  legendRed: {
    width: 30,
    height: 15,
    backgroundColor: "red",
    margin: 10,
  },
});

export default AttendanceList;
