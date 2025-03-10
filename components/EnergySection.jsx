import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { EnergyIcon, TemperatureIcon, HumidityIcon } from "./icon/CustomIcons";
import MetricDisplay from "./MetricDisplay";
import { getDatabase, ref, onValue, query, limitToLast } from "firebase/database";
import { firebaseApp } from "./firebase-config";

const EnergySection = () => {
  const [temperature, setTemperature] = useState("--");
  const [humidity, setHumidity] = useState("--");

  useEffect(() => {
    const db = getDatabase(firebaseApp);

    // Get today's date (YYYY-MM-DD format)
    const today = new Date().toISOString().split("T")[0]; // "2025-03-06"

    // Reference to today's data in Firebase    
    const dataRef = query(ref(db, `DHT22data/${today}`), limitToLast(1));

    onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val())[0]; // Get latest entry
        console.log("Firebase Data:", data); // Debugging
        setTemperature(data.temperature ? `${data.temperature} °C` : "--");
        setHumidity(data.humidity ? `${data.humidity}%` : "--");
      } else {
        console.log("No data found in Firebase!");
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.energyDisplay}>
        <EnergyIcon />
        <Text style={styles.energyValue}>0.00</Text>
        <Text style={styles.energyLabel}>Total Energy Collected</Text>
      </View>
      <View style={styles.metrics}>
        <MetricDisplay label="Current Temperature" value={temperature} icon={<TemperatureIcon />} />
        <MetricDisplay label="Current Humidity" value={humidity} icon={<HumidityIcon />} />
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
