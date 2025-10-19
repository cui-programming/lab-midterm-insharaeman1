// src/components/custom/TasbihList.js
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button } from '../ui';
import styles from '../../styles/styles';

export default function TasbihList() {
  const [tasbihs, setTasbihs] = useState([
    { id: '1', name: 'SubhanAllah', count: 0 },
    { id: '2', name: 'Alhamdulillah', count: 0 },
  ]);

  const updateCount = (id, delta) => {
    setTasbihs(prev =>
      prev.map(item =>
        item.id === id ? { ...item, count: Math.max(0, item.count + delta) } : item
      )
    );
  };

  return (
    <View style={styles.card}>
      {/* Heading */}
      <Text style={styles.title}>Tasbih</Text>

      {/* List of Tasbihs */}
      <FlatList
        data={tasbihs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.tasbihText}>
              {item.name}: {item.count}
            </Text>
            <View style={styles.buttonRow}>
              <Button title="+" onPress={() => updateCount(item.id, 1)} />
              <Button title="−" onPress={() => updateCount(item.id, -1)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}
