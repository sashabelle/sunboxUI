import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";
import SolarMonitorHeader from "./components/SolarMonitorHeader";
import EnergySection from "./components/EnergySection";
import AmountCard from "./components/AmountCard";

const SolarMonitor = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <SolarMonitorHeader />
        <View style={styles.content}>
          <EnergySection />
          <AmountCard />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the app takes the full screen
    justifyContent: "center", // Centers the card
    alignItems: "center",
    backgroundColor: "#212124",
  },
  card: {
    width: 520,
    height: 202,
    borderRadius: 19,
    padding: 22,
    paddingHorizontal: 90,
    backgroundColor: "#212124",
  },
  content: {
    alignItems: "center",
    display: "flex",
    gap: 13,
  },
});

// Ensure App.js exports this component
export default function App() {
  return <SolarMonitor />;
}
