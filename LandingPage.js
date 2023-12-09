import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Help2GO!</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('LoginPage')} />
        <Button title="Go to Registration" onPress={() => navigation.navigate('RegistrationPage')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99d6ff', 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
  },
});

export default LandingPage;
