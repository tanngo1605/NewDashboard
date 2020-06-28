import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
//import PieChart from 'react-native-pie';
import { PieChart, LineChart } from "react-native-chart-kit";

export default function MyPieChart() {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = [
    {
      name: "Absent",
      ratio: 25,
      color: "red",
      legendFontColor: "red",
      legendFontSize: 15,
    },
    {
      name: "Present",
      ratio: 75,
      color: "green",
      legendFontColor: "green",
      legendFontSize: 15,
    },
  
  ];

  return (
    <View>
      <PieChart
        data={data}
        width={120}
        height={120}
        chartConfig={chartConfig}
        accessor="ratio"
        backgroundColor="transparent"
        absolute
        paddingLeft={30}
        hasLegend={false}
      />
    </View>
  );
}


