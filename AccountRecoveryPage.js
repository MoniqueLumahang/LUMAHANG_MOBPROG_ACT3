import React, { useState } from 'react';
import { View, Text, Button, TextInput, SafeAreaView, StyleSheet } from 'react-native';

const AccountRecoveryPage = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    // Implement logic to send password reset code to the entered email address
    if (email.trim() !== '') {
      // Navigate to 'HomePage' on successful login
      navigation.navigate('LoginPage');
    } else {
      // Display an alert or handle unsuccessful login in some way
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleGoBack = () => {
    // Navigate back to 'LoginPage'
    navigation.navigate('LoginPage');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Account Recovery Page</Text>

        {/* Enter Registered Email Address */}
        <TextInput
          style={styles.input}
          placeholder="Enter Registered Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        {/* Button to Send Password Reset Code */}
        <View style={{ width: '80%', marginBottom: 10 }}>
          <Button title={`Send Password Reset Code to ${email}`} onPress={handleSendCode} />
        </View>

        {/* Button to Go Back to Login Page */}
        <View style={{ width: '80%', marginBottom: 10 }}>
          <Button title="Go Back to Login Page" onPress={handleGoBack} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default AccountRecoveryPage;
