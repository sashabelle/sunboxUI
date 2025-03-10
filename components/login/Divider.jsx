import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "./styles";

export const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    width: 236,
    height: 1,
    backgroundColor: colors.primary,
    marginBottom: 16,
  },
});
