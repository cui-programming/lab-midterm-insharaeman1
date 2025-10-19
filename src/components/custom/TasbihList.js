
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Button } from '../ui';  // ✅ use UI barrel components only

export default function TasbihList() {
  const [tasbihs, setTasbihs] = useState([
    { id: 1, phrase: 'SubhanAllah', count: 0 },
    { id: 2, phrase: 'Alhamdulillah', count: 0 },
    { id: 3, phrase: 'Allahu Akbar', count: 0 },
  ]);

  // ✅ Increment count immutably
  const handleIncrement = (id) => {
    setTasbihs((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // ✅ Decrement count immutably
  const handleDecrement = (id) => {
    setTasbihs((prev) =>
      prev.map((item) =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  // ✅ Render each row
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.phrase}>{item.phrase}</Text>
      <Text style={styles.count}>{item.count}</Text>

      <View style={styles.buttons}>
        <Button title="+" onPress={() => handleIncrement(item.id)} />
        <Button title="−" onPress={() => handleDecrement(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🕌 Tasbih Counter</Text>
      <FlatList
        data={tasbihs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  phrase: {
    fontSize: 16,
    flex: 1,
  },
  count: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  buttons: {
    flexDirection: 'row',
    gap: 6,
  },
});

