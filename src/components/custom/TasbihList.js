// src/components/custom/TasbihList.js
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button } from '../ui';  // Use only UI barrel
import { styles } from '../../styles/styles';

export default function TasbihList() {
  // Sample initial state
  const [tasbihList, setTasbihList] = useState([
    { id: 1, name: 'SubhanAllah', count: 0 },
    { id: 2, name: 'Alhamdulillah', count: 0 },
    { id: 3, name: 'Allahu Akbar', count: 0 },
  ]);

  // Increment a specific row
  const increment = (id) => {
    setTasbihList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Decrement a specific row (prevent going below 0)
  const decrement = (id) => {
    setTasbihList((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
          : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.tasbihRow}>
      <Text style={styles.tasbihName}>{item.name}</Text>
      <Text style={styles.tasbihCount}>{item.count}</Text>
      <View style={styles.tasbihButtons}>
        <Button title="+" onPress={() => increment(item.id)} />
        <Button title="−" onPress={() => decrement(item.id)} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={tasbihList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
}
