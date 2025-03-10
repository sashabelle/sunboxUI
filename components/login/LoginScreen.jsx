import React from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import HeaderSection from "./HeaderSection";
import LoginForm from "./LoginForm";
import ContactNote from "./ContactNote";
import { COLORS } from "./commonStyles";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <HeaderSection />
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee4e1866e9378430c56faa6e13385d50812bd0f8",
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <LoginForm />
        <ContactNote />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: 347,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    paddingHorizontal: 30,
    paddingVertical: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 162,
    height: 162,
    marginBottom: 30,
  },
});

export default LoginScreen;
