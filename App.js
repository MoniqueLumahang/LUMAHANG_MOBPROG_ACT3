// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import AccountRecoveryPage from './AccountRecoveryPage';
import HomePage from './HomePage';

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage" headerMode="none">
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
          <Stack.Screen name="AccountRecoveryPage" component={AccountRecoveryPage} />
          <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

