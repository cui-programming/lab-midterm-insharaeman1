/*import React from 'react';
import { Text as RNText } from 'react-native';

/**
 * UI/Text
 * A very thin wrapper over React Native's Text.
 * Note: This file exists, but it is NOT exported from 'ui/index.js' on purpose.
 * Students must discover and fix the missing export to use it via barrel import.
 
export default function Text(props) {
  return <RNText {...props} />;
}
import React from 'react';
import { Text as RNText } from 'react-native';

export default function Text(props) {
  return <RNText {...props} />;
}*/
// src/components/ui/Text.js
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

export function Text({ style, children, ...props }) {
  return (
    <RNText style={[styles.text, style]} {...props}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#222',
  },
});
