import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import EnergySection from './EnergySection';
import MetricsGrid from './MetricsGrid';
import ActionButton from './ActionButton';

const MonitorCard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <EnergySection />
      <MetricsGrid />
      <ActionButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 378,
    height: 348,
    padding: 10,
    borderRadius: 9,
    backgroundColor: '#1E1E1E',
    position: 'relative',
  },
});

export default MonitorCard;
