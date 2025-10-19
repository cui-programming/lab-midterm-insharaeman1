// ✅ src/components/custom/TeacherMessage.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../ui'; // 👈 use barrel import

export default function TeacherMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📢 Teacher’s Message</Text>
      <Text style={styles.message}>
        Dear students, remember — learning React Native is not just about writing code, 
        it's about building amazing apps step by step!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginVertical: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    marginTop: 8,
    fontSize: 16,
    color: '#555',
  },
});
