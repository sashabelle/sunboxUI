import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { colors, fonts } from "./styles";

export const LoginForm = () => {
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Admin Name</Text>
        <TextInput
          style={styles.input}
          value={adminName}
          onChangeText={setAdminName}
          placeholder="Enter admin name"
          placeholderTextColor={colors.primary}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter password"
          placeholderTextColor={colors.primary}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  formGroup: {
    width: "100%",
    marginBottom: 28,
  },
  label: {
    color: colors.primary,
    fontFamily: fonts.medium,
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 32,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 9,
    paddingHorizontal: 10,
    color: colors.primary,
    fontFamily: fonts.regular,
  },
  button: {
    width: 122,
    height: 36,
    backgroundColor: colors.accent,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    color: colors.dark,
    fontFamily: fonts.medium,
    fontSize: 16,
    fontWeight: "500",
  },
});
