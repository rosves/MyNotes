import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import DashboardScreen from './DashboardScreen';
import NoteScreen from './NoteScreen';
import FormScreen from './FormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} 
        options={{ 
          title: 'MyNotes',  
          headerStyle: {
            backgroundColor: '#0F4B5F',  
          },
          headerTintColor: '#fff',  
          headerTitleStyle: {
            fontWeight: 'bold',  
          },
        }}/>
        <Stack.Screen name="Note" component={NoteScreen}
        options={{ 
          title: 'MyNotes', 
          headerStyle: {
            backgroundColor: '#0F4B5F',  
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',  
          },
        }}
         />
        <Stack.Screen name="Form" component={FormScreen} 
        options={{ 
          title: 'MyNotes', 
          headerStyle: {
            backgroundColor: '#0F4B5F',  
          },
          headerTintColor: '#fff',  
          headerTitleStyle: {
            fontWeight: 'bold',  
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    TitleFontText: {
      fontFamily: 'Orbitron-Regular', 
      fontSize: 24,
      color: '#333',
    },
    ContentFontText: {
      fontSize: 24,
      color: '#333',
    },
  });
}