// index.tsx (Correct)
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../screens/SignupScreen'
import Login from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;