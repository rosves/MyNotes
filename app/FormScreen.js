// screens/FormScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function FormScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [importance, setImportance] = useState('Low');

  const handleSave = () => {
    const newNote = {
      title,
      date,
      content,
      importance,
    };

    navigation.navigate('Dashboard', { newNote });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tittle:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Add a tittle..."
      />

      <Text style={styles.label}>Date:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDate}
        value={date}
        placeholder="DD-MM-YYYY"
      />

      <Text style={styles.label}>Content:</Text>
      <TextInput
        style={styles.textArea}
        onChangeText={setContent}
        value={content}
        placeholder="Take some notes..."
        multiline={true}
      />

      <Text style={styles.label}>Priority:</Text>
      <Picker
        selectedValue={importance}
        style={styles.picker}
        onValueChange={(itemValue) => setImportance(itemValue)}
      >
        <Picker.Item label="Low" value="Low" />
        <Picker.Item label="Medium" value="Medium" />
        <Picker.Item label="High" value="High" />
      </Picker>

      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0F4B5F',
    
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "#ffffff"
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    color : "#FFFF"
  },
  picker: {
    height: 180,
    marginBottom: 15,
     color : "#FFFF"
  },
});
