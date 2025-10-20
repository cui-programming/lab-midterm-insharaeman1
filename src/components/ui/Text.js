import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

export default function Text({ children, style, ...props }) {
  return <RNText style={[styles.text, style]} {...props}>{children}</RNText>;
}

const styles = StyleSheet.create({
  text: { fontSize: 16, color: '#000' },
});
