import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Solar Energy Monitor</Text>
      <View style={styles.datetime}>
        <Image
          source={https://cdn.builder.io/api/v1/image/assets/TEMP/d600bf415216270a2b9b65cfcae24d52858d57ee}
          style={styles.icon}
        />
        <Text style={styles.timeText}>2025-02-19</Text>
        <Image
          source={https://cdn.builder.io/api/v1/image/assets/TEMP/e299ff41e9ed9cffc207b532a617bda511b4bfaa}
          style={styles.icon}
        />
        <Text style={styles.timeText}>22 : 09 : 00
