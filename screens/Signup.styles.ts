import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;


export const styles = StyleSheet.create({
    signup_screen: {
        flex: 1,
        backgroundColor: '#3066be',
    },
    signup_container: {
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
    signupBtn: {
        width: '100%',
        backgroundColor: '#4CAF50', // Green login button
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    signupText: {
        color: '#fff', // White login text
        fontSize: 16,
    },
    inlineTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 75,
        width: screenWidth,
        borderTopColor: '#DEDEDE', // Slight dim on the border
        borderTopWidth: 1,
    },
    loginText: {
        color: '#fff', 
        fontSize: 16,
        marginTop: 25,
    },
    loginLink: {
        textDecorationLine: 'underline',
        marginLeft: 4,
    },


  });