import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CalendarIcon, ClockIcon } from "./icon/CustomIcons";

const SolarMonitorHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Solar Energy Monitor</Text>
      <View style={styles.datetime}>
        <View style={styles.dateGroup}>
          <CalendarIcon />
          <Text style={styles.dateTime}>2025-02-19</Text>
        </View>
        <View style={styles.timeGroup}>
          <ClockIcon />
          <Text style={styles.dateTime}>22 : 09 : 00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dateGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  timeGroup: {
    display: "flex",
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
