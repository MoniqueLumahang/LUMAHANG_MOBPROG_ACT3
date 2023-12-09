// pages/HomePage.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button title="Logout" onPress={() => navigation.navigate('LoginPage')} />
    </View>
  );
};

export default HomePage;