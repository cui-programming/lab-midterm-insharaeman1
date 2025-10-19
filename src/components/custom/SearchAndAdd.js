// src/components/custom/SearchAndAdd.js
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, TextInput, Button } from '../ui';
import styles from '../../styles/styles';

export default function SearchAndAdd() {
  const [search, setSearch] = useState('');
  const [addText, setAddText] = useState('');
  const [results, setResults] = useState([]);

  const showResult = () => {
    const combined = [];
    if (search) combined.push(`Search: ${search}`);
    if (addText) combined.push(`Add: ${addText}`);
    setResults(combined);
    setAddText(''); // clear add input after showing
  };

  return (
    <View style={styles.card}>
      {/* Heading */}
      <Text style={styles.title}>Add and Search</Text>

      {/* Search Input */}
      <TextInput placeholder="Search" value={search} onChangeText={setSearch} />

      {/* Add Input */}
      <TextInput placeholder="Add" value={addText} onChangeText={setAddText} />
      
      {/* Button */}
      <Button title="Show Result" onPress={showResult} />

      {/* Display Results */}
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.tasbihText}>{item}</Text>}
      />
    </View>
  );
}
