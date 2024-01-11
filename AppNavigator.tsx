import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';


/* For navigating to new pages */
import { Login } from './screens/Login';
import { Signup } from './screens/Signup';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};


const Stack = createNativeStackNavigator();


const App = (): React.ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Signup"
          component={Signup} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
