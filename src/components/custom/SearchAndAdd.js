// ✅ src/components/custom/SearchAndAdd.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from '../ui';  // ✅ use only ui components

export default function SearchAndAdd() {
  const [phrases, setPhrases] = useState([
    { id: 1, phrase: 'SubhanAllah', count: 0 },
    { id: 2, phrase: 'Alhamdulillah', count: 0 },
    { id: 3, phrase: 'Allahu Akbar', count: 0 },
  ]);

  const [searchText, setSearchText] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  // ✅ Filter phrases by search text (case-insensitive)
  const filteredPhrases = phrases.filter((item) =>
    item.phrase.toLowerCase().includes(searchText.toLowerCase())
  );

  // ✅ Add new unique phrase with count: 0
  const handleAdd = () => {
    const trimmed = newPhrase.trim();
    if (!trimmed) return;

    const exists = phrases.some(
      (item) => item.phrase.toLowerCase() === trimmed.toLowerCase()
    );

    if (exists) {
      alert('Phrase already exists!');
    } else {
      const newItem = {
        id: phrases.length + 1,
        phrase: trimmed,
        count: 0,
      };
      setPhrases([...phrases, newItem]); // ✅ immutable update
      setNewPhrase('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Search & Add Zikr</Text>

      {/* Search box */}
      <TextInput
        placeholder="Search Zikr..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.input}
      />

      {/* Add box */}
      <TextInput
        placeholder="Add new Zikr..."
        value={newPhrase}
        onChangeText={setNewPhrase}
        style={styles.input}
      />
      <Button title="Add Zikr" onPress={handleAdd} />

      {/* List of filtered phrases */}
      <FlatList
        data={filteredPhrases}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>
            {item.phrase} ({item.count})
          </Text>
        )}
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
  input: {
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 4,
  },
});
