import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

export default function TextInput(props) {
  return <RNTextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    marginVertical: 5,
  },
});
