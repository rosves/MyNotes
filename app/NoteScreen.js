// screens/NoteScreen.js

import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NoteScreen({ route }) {
  const { note } = route.params;
  const navigation = useNavigation();

  const handleDelete = () => {
    Alert.alert(
      "Delete note",
      "Are you sure you want to delete the note ?",
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Supprimer",
          onPress: () => {
            console.log('ID de la note à supprimer:', note.id);

            navigation.navigate('Dashboard', { deleteNoteId: note.id });

            Alert.alert("Note deleted", "The note has been delete successfully ! ");

            navigation.goBack();
          },
          style: "destructive",
        },
      ]
    );
  };

  const getImportanceStyle = (importance) => {
    switch (importance) {
      case 'High':
        return { color: 'red' };
      case 'Medium':
        return { color: 'orange' };
      case 'Low':
        return { color: 'green' };
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{note.date}</Text>
      <Text style={styles.title}>{note.title}</Text>
      
      <Text style={[styles.importance, getImportanceStyle(note.importance)]}>
        Importance: {note.importance}
      </Text>
      <Text style={styles.content}>{note.content}</Text>
      <Button title="Delete the note" onPress={handleDelete} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0F4B5F'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color : "#FFFF"
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
    color : "#FFFF"
  },
  importance: {
    fontSize: 18,
    marginVertical: 5,
  },
  content: {
    fontSize: 16,
     backgroundColor: '#41698C',
    marginVertical: 10,
    color : "#FFFF"
  },
});
