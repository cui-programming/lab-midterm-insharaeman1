import React, { useState } from 'react';
import { View, FlatList, Text as RNText } from 'react-native';
import { TextInput, Button } from '../ui'; 
import styles from '../../styles/styles';

export default function SearchAndAdd() {
  const [phrases, setPhrases] = useState([
    { phrase: 'SubhanAllah', count: 0 },
    { phrase: 'Alhamdulillah', count: 0 },
    { phrase: 'Allahu Akbar', count: 0 },
  ]);

  const [search, setSearch] = useState('');
  const [addText, setAddText] = useState('');

 
  const filteredPhrases = phrases.filter(item =>
    item.phrase.toLowerCase().includes(search.toLowerCase())
  );

 
  const addPhrase = () => {
    const trimmedText = addText.trim();
    if (!trimmedText) return; 

    const exists = phrases.some(
      item => item.phrase.toLowerCase() === trimmedText.toLowerCase()
    );

    if (!exists) {
      setPhrases([...phrases, { phrase: trimmedText, count: 0 }]);
      setAddText(''); 
    }
  };

  return (
    <View style={styles.card}>
     
      <TextInput
        placeholder="Search phrases..."
        value={search}
        onChangeText={setSearch}
        style={{ marginBottom: 10 }}
      />

      
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TextInput
          placeholder="Add new phrase..."
          value={addText}
          onChangeText={setAddText}
          style={{ flex: 1, marginRight: 10 }}
        />
        <Button title="Add" onPress={addPhrase} />
      </View>

      
      <FlatList
        data={filteredPhrases}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <RNText style={{ paddingVertical: 5 }}>
            {item.phrase} (Count: {item.count})
          </RNText>
        )}
      />
    </View>
  );
}
