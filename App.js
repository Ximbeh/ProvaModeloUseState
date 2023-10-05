import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);

  const addName = () => {
    if (name.trim() !== '') {
      // Adicione o nome à lista
      setNameList([...nameList, name]);
      // Limpe o campo de entrada
      setName('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Adicionar Nome" onPress={addName} />
      <FlatList
        data={nameList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  listItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
});