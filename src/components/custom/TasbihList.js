// ✅ src/components/custom/TasbihList.js
import React, { useState } from 'react';
import { View, Text, Button } from '../ui';  // use barrel components

export default function TasbihList() {
  const [tasbihs, setTasbihs] = useState([
    { id: 1, title: 'SubhanAllah', count: 0 },
    { id: 2, title: 'Alhamdulillah', count: 0 },
    { id: 3, title: 'Allahu Akbar', count: 0 },
  ]);

  // ✅ increment selected tasbih (immutable update)
  const increment = (id) => {
    setTasbihs(prev =>
      prev.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // ✅ decrement selected tasbih (immutable update)
  const decrement = (id) => {
    setTasbihs(prev =>
      prev.map(item =>
        item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  return (
    <View style={{ padding: 20 }}>
      {tasbihs.map((item) => (
        <View
          key={item.id}
          style={{
            marginBottom: 15,
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            padding: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
            {item.title}
          </Text>

          <Text style={{ fontSize: 16, marginBottom: 10 }}>
            Count: {item.count}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button title="➕ Increment" onPress={() => increment(item.id)} />
            <Button title="➖ Decrement" onPress={() => decrement(item.id)} />
          </View>
        </View>
      ))}
    </View>
  );
}
