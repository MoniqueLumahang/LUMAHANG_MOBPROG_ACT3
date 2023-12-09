import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Assuming you have hardcoded credentials for demonstration purposes
    // const correctUsername = 'User';
    // const correctPassword = 'Password';

    // Check if entered credentials match
  if (username.trim() !== ''  && password.trim() !== '') {
      // Navigate to 'HomePage' on successful login
      navigation.navigate('HomePage');
    } else {
      // Display an alert or handle unsuccessful login in some way
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login Page</Text>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {/* Login Button */}
        <View style={styles.buttonContainer}>
          {/* Fixed the typo in onPress */}
          <Button title="Login" onPress={handleLogin} />
        </View>

        {/* Navigation Buttons */}
        <View style={styles.buttonContainer}>
          <Button title="Go back to Landing" onPress={() => navigation.navigate('LandingPage')} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Go to Registration" onPress={() => navigation.navigate('RegistrationPage')} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Go to Account Recovery" onPress={() => navigation.navigate('AccountRecoveryPage')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF', // Light blue color
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 10,
  },
});

export default LoginPage;
