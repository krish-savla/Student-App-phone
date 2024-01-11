import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;


export const styles = StyleSheet.create({
    login_screen: {
        flex: 1,
        backgroundColor: '#3066be',
    },
    login_container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 150,
        paddingHorizontal: 24,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 40,
      color: '#fff', 
      marginBottom: 70,
    },
    inlineTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 182,
        width: screenWidth,
        borderTopColor: '#DEDEDE', // Slight dim on the border
        borderTopWidth: 1,
    },
    signupLink: {
      textDecorationLine: 'underline',
      marginLeft: 4,
    },
    signUpText: {
      color: '#fff', 
      fontSize: 16,
      marginTop: 25,
    },
    loginBtn: {
      width: '100%',
      backgroundColor: '#4CAF50', // Green login button
      borderRadius: 10,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    loginText: {
        color: '#fff', // White login text
        fontSize: 16,
    },
    forgotLink: {
        textDecorationLine: 'underline',
        color: '#fff',
        marginLeft: 200,
        marginBottom: 15,
    },
  });