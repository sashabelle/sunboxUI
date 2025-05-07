import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface MetricDisplayProps {
  label: string;
  value: string | number;
  icon: ReactNode;
}

const MetricDisplay = ({ label, value, icon }: MetricDisplayProps) => {
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
    gap: 5, // Slightly increased for better spacing
    width: "100%", // Make it responsive
    backgroundColor: "#1B1B1D",
    borderRadius: 6,
    padding: 10,
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