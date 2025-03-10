import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { colors, fonts } from "./styles";

export const ContactNote = () => {
  const handleEmailPress = () => {
    Linking.openURL("mailto:sunbox041990@gmail.com");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        To create an account, please contact the administrators at
      </Text>
      <Text style={styles.email} onPress={handleEmailPress}>
        sunbox041990@gmail.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: colors.primary,
    fontFamily: fonts.regular,
    fontSize: 12,
    textAlign: "center",
    lineHeight: 19,
  },
  email: {
    color: colors.accent,
    fontFamily: fonts.regular,
    fontSize: 12,
    marginTop: 4,
    textDecorationLine: "underline",
  },
});
