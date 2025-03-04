import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { EnergyIcon, TemperatureIcon, HumidityIcon } from "./CustomIcons";
import MetricDisplay from "./MetricDisplay";

const EnergySection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.energyDisplay}>
        <EnergyIcon />
        <Text style={styles.energyValue}>0.00</Text>
        <Text style={styles.energyLabel}>Total Energy Collected</Text>
      </View>
      <View style={styles.metrics}>
        <MetricDisplay
          label="Current Temperature"
          value="36.9 ° C"
          icon={<TemperatureIcon />}
        />
        <MetricDisplay
          label="Current Humidity"
          value="100%"
          icon={<HumidityIcon />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 9,
  },
  energyDisplay: {
    width: 159,
    height: 116,
    borderRadius: 9,
    backgroundColor: "#1B1B1D",
    display: "flex",
    alignItems: "center",
    paddingVertical: 15,
  },
  energyValue: {
    fontSize: 41,
    fontWeight: "500",
    color: "#EEBD62",
  },
  energyLabel: {
    fontSize: 10,
    fontWeight: "500",
    marginTop: 4,
    textAlign: "center",
    color: "#EEBD62",
  },
  metrics: {
    display: "flex",
    gap: 7,
  },
});

export default EnergySection;
