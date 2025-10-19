/*import React from 'react';
import { Pressable, Text } from 'react-native';

/**
 * Minimal UI Button (no styling).
 * Students will style this via 'styles/styles.js'.
 
export default function Button({ onPress, children, style, ...rest }) {
  return (
    <Pressable onPress={onPress} style={style} {...rest}>
      <Text>{children}</Text>
    </Pressable>
  );
}*/
// src/components/ui/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 6,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
