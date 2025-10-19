import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../ui';  // use only ui components

export default function TeacherMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Teacher’s Message</Text>
      <Text style={styles.message}>
        Dear students, remember — learning React Native is not just about writing code,
        it’s about understanding how components work together to build interactive apps.
        Keep practicing and stay curious!
      </Text>
      <Text style={styles.signature}>— Your Teacher</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f0f8ff',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
  },
  signature: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: 14,
  },
});
