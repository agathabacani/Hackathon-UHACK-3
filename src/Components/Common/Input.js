import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View>
        <FormLabel>{label}</FormLabel>
        <FormInput 
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
  );
};

export { Input };
