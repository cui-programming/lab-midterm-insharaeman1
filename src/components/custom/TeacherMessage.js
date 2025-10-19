import React from 'react';
import { View } from 'react-native';
import { Text, Button } from '../ui';
import styles from '../../styles/styles';

export default function TeacherMessage() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Teacher's Message</Text>
      <Text style={styles.message}>
        Complete your assignments on time and practice consistently.
      </Text>

      {/* Smaller Button */}
      <Button
        title="Got it!"
        onPress={() => alert('Acknowledged!')}
        style={{ padding: 5, minWidth: 20, borderRadius: 4 }} // <-- smaller
      />
    </View>
  );
}
