/*// src/components/custom/AboutMe.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../ui'; // <- use barrel

export default function AboutMe() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 About Me</Text>
      <Text>I am a student learning React Native. This text comes from ui/Text (barrel).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 12 },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 6 },
});*/
// ✅ src/components/custom/AboutMe.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../ui'; // 👈 Use barrel imports

export default function AboutMe() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>👩‍🎓 About Me</Text>
      <Text style={styles.info}>My name is Inshara Eman, and I’m learning React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  info: {
    fontSize: 16,
    color: '#555',
  },
});
