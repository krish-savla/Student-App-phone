import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import { styles } from './TextInputSmall.styles';

// const [state, setState] = useState({
//   email: '',
//   password: '',
// });


export const TextField = ({placeholder}) => {
  return (
    <View style={styles.inputView}>
    <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor="#757575"
        // onChangeText={(text) => setState({ ...state, email: text })}
    />
    </View>
  );
}