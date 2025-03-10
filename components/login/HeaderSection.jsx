import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "./styles";

export const HeaderSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Sunbox</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeContainer: {
    marginBottom: 5,
  },
  welcomeText: {
    color: colors.primary,
    fontFamily: fonts.semiBold,
    fontSize: 13,
    fontWeight: "600",
  },
  titleContainer: {},
  titleText: {
    color: colors.primary,
    fontFamily: fonts.semiBold,
    fontSize: 31,
    fontWeight: "600",
  },
});
