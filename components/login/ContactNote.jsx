import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { COLORS, FONTS, SIZES } from "./commonStyles";

const ContactNote = () => {
  const handleEmailPress = () => {
    Linking.openURL("mailto:sunbox041990@gmail.com");
  };

  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <Text style={styles.text}>
        To create an account, please contact the administrators at
      </Text>
      <TouchableOpacity onPress={handleEmailPress}>
        <Text style={styles.email}>sunbox041990@gmail.com</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  divider: {
    width: 236,
    height: 1,
    backgroundColor: COLORS.primary,
    marginBottom: 16,
  },
  text: {
    color: COLORS.primary,
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    textAlign: "center",
    lineHeight: 19,
  },
  email: {
    color: COLORS.accent,
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    marginTop: 4,
  },
});

export default ContactNote;
