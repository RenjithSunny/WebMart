import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchBar from './Pages/SearchBar';
import Products from './Pages/Products'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchBar" screenOptions={{
        headerStyle: {
          backgroundColor: '#ffa31a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center'
        },
      }}>
        <Stack.Screen name="Products" component={Products} options={{ title: 'Search Products' }} />
        <Stack.Screen name="SearchBar" component={SearchBar} options={{ title: 'Search Results' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
