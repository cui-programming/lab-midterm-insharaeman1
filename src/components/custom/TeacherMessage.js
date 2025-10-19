// src/components/custom/TeacherMessage.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from '../ui';  // ✅ use barrel exports

export default function TeacherMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📢 Teacher’s Message</Text>
      <Text style={styles.message}>
        Dear students, always remember — practice React Native every day to become confident!
      </Text>
      <Button title="Got it 👍" onPress={() => alert('Keep learning!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    margin: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
  },
});
