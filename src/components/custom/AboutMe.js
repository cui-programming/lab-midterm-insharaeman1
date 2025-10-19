import React from 'react';
import { View, Text } from 'react-native'; // TODO: replace Text with ui/Text after export
import { styles } from '../../styles/styles';

/**
 * Custom/AboutMe
 * Shows name and registration number at the top.
 * Props: name (string), regNo (string)
 **/
export default function AboutMe({ Inshara, sp23bse069 }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{name}</Text>
      <Text style={styles.headerText}>{regNo}</Text>
    </View>
  );
}