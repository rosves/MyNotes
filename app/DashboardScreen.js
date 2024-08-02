

import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export default function DashboardScreen({ route }) {
  const navigation = useNavigation();
  const [notes, setNotes] = useState([
    {
      id: '1',
      title: 'Note 1',
      date: '2024-08-01',
      content: 'Nothing here ?',
      importance: 'High',
    },
    {
      id: '2',
      title: 'Note 2',
      date: '2024-08-02',
      content: 'Nothing here !',
      importance: 'Medium',
    },
  ]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      // Vérifier si un nouveau paramètre de note est passé
      if (route.params?.newNote) {
        const newNote = { ...route.params.newNote, id: Date.now().toString() };
        
        // Vérifiez si la note existe déjà
        if (!notes.find(note => note.title === newNote.title && note.date === newNote.date)) {
          setNotes((prevNotes) => [...prevNotes, newNote]);
        }
      }

      
      if (route.params?.deleteNoteId) {
        console.log('ID de la note à supprimer reçu:', route.params.deleteNoteId);

        const updatedNotes = notes.filter(note => note.id !== route.params.deleteNoteId);
        
        if (updatedNotes.length !== notes.length) {
          
          

          setNotes(updatedNotes);
        } else {
          console.log('Aucune note supprimée, vérifiez l\'ID.');
        }

        // Réinitialiser le paramètre deleteNoteId après suppression pour éviter les suppressions répétées
        navigation.setParams({ deleteNoteId: null });
      }
    }
  }, [isFocused, route.params, notes, navigation]);

  const renderNote = ({ item }) => (
    <TouchableOpacity
      style={[styles.noteItem, getImportanceStyle(item.importance)]}
      onPress={() => navigation.navigate('Note', { note: item })}
    >
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteDate}>{item.date}</Text>
      <Text style={styles.noteContent}>{item.content.substring(0, 30)}...</Text>
    </TouchableOpacity>
  );

  const getImportanceStyle = (importance) => {
    switch (importance) {
      case 'High':
        return { borderLeftColor: 'red', borderLeftWidth: 5 };
      case 'Medium':
        return { borderLeftColor: 'orange', borderLeftWidth: 5 };
      case 'Low':
        return { borderLeftColor: 'green', borderLeftWidth: 5 };
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderNote}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add Note" onPress={() => navigation.navigate('Form')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0F4B5F'
  },
  noteItem: {
    backgroundColor: '#41698C',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 1,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  noteDate: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  noteContent: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
