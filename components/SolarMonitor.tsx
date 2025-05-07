import React from "react";
import { View, StyleSheet } from "react-native";
import SolarMonitorHeader from "./SolarMonitorHeader";
import EnergySection from "./EnergySection";

const SolarMonitor = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <SolarMonitorHeader />
        <View style={styles.content}>
          <EnergySection />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 358,
    height: 202,
  },
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 9,
    padding: 22,
    paddingHorizontal: 25,
  },
  content: {
    display: "flex",
    gap: 13,
  },
});

export default SolarMonitor;
