// src/components/custom/TeacherMessage.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../ui'; // ✅ Import from barrel

export default function TeacherMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📢 Teacher’s Message</Text>
      <Text style={styles.message}>
        Dear students, remember — learning React Native is not just about writing code,
        it’s about building amazing mobile experiences! 🌟
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#eef6ff',
    borderRadius: 10,
    margin: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    color: '#004aad',
  },
  message: {
    fontSize: 16,
    color: '#333',
  },
});

