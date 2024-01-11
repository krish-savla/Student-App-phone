import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, } from 'react-native';
import { TextField } from '../components/TextInputSmall';
import { styles } from './Signup.styles';
import { useNavigation } from '@react-navigation/native';


export const Signup = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.signup_screen}>
            <View style={styles.signup_container}>
                <Text style={styles.title}>Scholar Drive</Text>
                <TextField placeholder="Email"/>
                <TextField placeholder="Phone number"/>
                <TextField placeholder="Password"/>
                <TextField placeholder="Confirm password"/>
                <TouchableOpacity onPress={onPressSignUp} style={styles.signupBtn}>
                    <Text style={styles.signupText}>Sign up</Text>
                </TouchableOpacity>

                <View style={styles.inlineTextContainer}>
                    <Text style={styles.loginText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={[styles.loginText, styles.loginLink]}> Log in.</Text>
                    </TouchableOpacity>
                </View>
            </View>

      
        </SafeAreaView>
    );
}


const onPressForgotPassword = () => {
    // Do something about forgot password operation
}

const onPressLogin = () => {    
    // Do something about login operation
}

const onPressSignUp = () => {
    // Do something about signup operation
}