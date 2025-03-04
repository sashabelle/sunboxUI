import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import WalletIcon from "./WalletIcon";

const AmountCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Total Amount Collected</Text>
      </View>
      <View style={styles.amountContainer}>
        <WalletIcon />
        <Text style={styles.amount}>₱ 0.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 358,
    height: 107,
    borderRadius: 9,
    paddingTop: 14,
    paddingRight: 17,
    paddingBottom: 14,
    paddingLeft: 17,
    backgroundColor: "#eeb062",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titleContainer: {
    marginBottom: 17,
  },
  title: {
    color: "#1E1E1E",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Instrument Sans",
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  amount: {
    color: "#1B1B1D",
    fontSize: 41,
    fontWeight: "400",
    letterSpacing: 0.82,
    fontFamily: "Instrument Sans",
  },
});

export default AmountCard;