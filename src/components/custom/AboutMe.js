// src/components/custom/AboutMe.js
import React from 'react';
import { View } from 'react-native';
import { Text, Button } from '../ui'; // Import from barrel
import styles from '../../styles/styles';

export default function AboutMe() {
  const handleGreet = () => {
    alert('Hello! Welcome to my profile.');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.message}>
       Inshara Eman
       Sp23-bse-069
      </Text>
    </View>
  );
}

