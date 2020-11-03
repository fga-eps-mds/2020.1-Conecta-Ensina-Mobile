import React from 'react';
import {TextInput} from 'react-native';
import {FieldContainer} from '../FieldContainer/styles';

export default function PasswordInput(props) {
  return (
    <FieldContainer>
      <TextInput
        placeholder="Senha"
        autoCapitalize="none"
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={true}
        placeholderTextColor="#F6F6F6"
        style={{
          color: '#FFFFFF',
          fontSize: 14,
          flex: 1,
          textAlign: 'center',
        }}
      />
    </FieldContainer>
  );
}
