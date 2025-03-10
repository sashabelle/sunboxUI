import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "./commonStyles";

const HeaderSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.titleText}>Sunbox</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    marginBottom: 5,
  },
  titleText: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.xlarge,
  },
});

export default HeaderSection;
