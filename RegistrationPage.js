import React, { useState } from 'react';
import { View, Text, Button, TextInput, SafeAreaView, StyleSheet } from 'react-native';

const RegistrationPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle signup logic here
    if (name.trim() !== ''  || email.trim() !== '' || password.trim() !== '') {
      // Navigate to 'HomePage' on successful login
      navigation.navigate('LoginPage');
    } else {
      // Display an alert or handle unsuccessful login in some way
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Registration Page</Text>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        {/* Sign Up Button */}
        <View style={styles.buttonContainer}>
          <Button title="Sign Up" onPress={handleSignUp} />
        </View>

        {/* Navigation Buttons */}
        <View style={styles.buttonContainer}>
          <Button title="Go back to Login" onPress={() => navigation.navigate('LoginPage')} />
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

export default RegistrationPage;
