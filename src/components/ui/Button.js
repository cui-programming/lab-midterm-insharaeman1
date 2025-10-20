
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress, style }) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 8, 
    minWidth: 30, 
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  text: { 
    color: '#fff', 
    fontSize: 16 },
});
