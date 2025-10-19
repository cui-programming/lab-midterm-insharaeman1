/*// ✅ src/components/ui/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});*/

// ✅ src/components/custom/TeacherMessage.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../ui'; // 👈 Only use ui components

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
