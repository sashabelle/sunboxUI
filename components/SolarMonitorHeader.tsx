import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CalendarIcon, ClockIcon } from "./icon/CustomIcons";

const SolarMonitorHeader = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const formattedDate = now.toISOString().split("T")[0]; // YYYY-MM-DD
      const formattedTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }); // HH:MM:SS format

      setDate(formattedDate);
      setTime(formattedTime);
    };

    updateDateTime(); // Initial call
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Solar Energy Monitor</Text>
      <View style={styles.datetime}>
        <View style={styles.dateGroup}>
          <CalendarIcon />
          <Text style={styles.dateTime}>{date}</Text>
        </View>
        <View style={styles.timeGroup}>
          <ClockIcon />
          <Text style={styles.dateTime}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    color: "#CBB7B7",
    fontSize: 15,
    fontWeight: "600",
  },
  datetime: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dateGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  timeGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dateTime: {
    color: "#CBB7B7",
    fontSize: 8,
    fontWeight: "500",
  },
});

export default SolarMonitorHeader;
