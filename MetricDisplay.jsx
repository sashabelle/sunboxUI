import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MetricDisplay = ({ label, value, icon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        {icon}
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  label: {
    color: "#CBB7B7",
    fontSize: 9,
    fontWeight: "500",
  },
  valueContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  value: {
    color: "#CBB7B7",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default MetricDisplay;