import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home';
import Details from './screens/details'

const Stack = createNativeStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}  />
           <Stack.Screen name="Details" component={Details}  /> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

