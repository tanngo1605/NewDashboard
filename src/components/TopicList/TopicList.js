import React from "react";
import TopicIcon from "../TopicIcon/TopicIcon";
import { View, StyleSheet} from "react-native";

const sections = [
  "Calendar",
  "Results",
  "Bus Tracking",
  "Homework",
  "Time Table",
  "Syllabus",
  "Messages",
];

const TopicList = (props) => (
  <View style={styles.container}>
    {sections.map((section, key) => (
      <TopicIcon key={key} section={section} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "95vw",
    marginTop: 40,
  },
});

export default TopicList;
