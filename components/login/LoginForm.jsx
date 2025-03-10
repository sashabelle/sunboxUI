import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, FONTS, SIZES } from "./commonStyles";

const LoginForm = () => {
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Admin Name</Text>
        <TextInput
          style={styles.input}
          value={adminName}
          onChangeText={setAdminName}
          placeholder="Enter admin name"
          placeholderTextColor={COLORS.primary}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter password"
          placeholderTextColor={COLORS.primary}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputGroup: {
    width: "100%",
    marginBottom: 28,
  },
  label: {
    color: COLORS.primary,
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 32,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 9,
    paddingHorizontal: 10,
    color: COLORS.primary,
    fontFamily: FONTS.regular,
  },
  button: {
    width: 122,
    height: 36,
    backgroundColor: COLORS.accent,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
  buttonText: {
    color: COLORS.dark,
    fontFamily: FONTS.medium,
    fontSize: SIZES.large,
  },
});

export default LoginForm;
