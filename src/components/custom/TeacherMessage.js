// src/components/custom/TeacherMessage.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'ui'; // ✅ use only ui/* components

export default function TeacherMessage() {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>Message from Teacher</Text>
      <Text style={styles.message}>
        Please complete your assignments on time and attend all classes.
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  message: {
    fontSize: 14,
  },
});
