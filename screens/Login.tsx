import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  } from 'react-native';

import { styles } from './Login.styles';
import { TextField } from '../components/TextInputSmall';
import { useNavigation } from '@react-navigation/native';



export const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.login_screen}>
      <View style={styles.login_container}>
        <Text style={styles.title}>Scholar Drive</Text>
        <TextField placeholder="Email"/>
        <TextField placeholder="Password"/>
        <TouchableOpacity onPress={onPressForgotPassword}>
          <Text style={styles.forgotLink}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.inlineTextContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={[styles.signUpText, styles.signupLink]}> Sign up.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
    
};

const onPressForgotPassword = () => {
    // Do something about forgot password operation
}

const onPressLogin = () => {    
    // Do something about login operation
}

const onPressSignUp = () => {
    // Do something about signup operation
}